import React, { useState, useEffect, useMemo } from 'react';
import { NativeModules } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
    View,
    List,
} from 'native-base';
import { getProductsSelector, getMaxPrice } from 'selectors';
import Format from 'helpers/format';
import Objects from 'constants/objects';
import SortByQuantity from 'components/SortByQuantity';
import RenderProductItem from 'components/RenderProductItem';
import SearchByName from 'components/SearchByName';
import FilterByPriceSlider from 'components/FilterByPriceSlider';
import FilterByAviability from 'components/FilterByAviability';

const propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
        getParam: PropTypes.func,
        push: PropTypes.func,
        pop: PropTypes.func,
    }).isRequired,
    id: PropTypes.number.isRequired,
};

const RenderProducts = ({ id, navigation }) => {
    const { StoreToastModule } = NativeModules;
    const products = useSelector(getProductsSelector);
    const maxPrice = useSelector(getMaxPrice);
    const [searchText, setSearchText] = useState('');
    const [sortType, setSortType] = useState(0);
    const [showAll, setShowAll] = useState(true);
    const [showAvailable, setShowAvailable] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const onSlidingComplete = (value) => setSliderValue(value);
    const getFilterProductsByName = products.filter((item) => {
        if (setSearchText) {
            return item.sublevel_id === id && item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
        }
        return item.sublevel_id === id;
    });
    const [currentCategoryProducts, setCurrentCategoryProducts] = useState([]);
    const onChangeText = (txt) => setSearchText(txt);
    const onChangeSortBy = (value) => setSortType(value);
    const onPressRadio = (radio) => () => {
        if (radio) {
            setShowAll(false);
            setShowAvailable(true);
        } else {
            setShowAll(true);
            setShowAvailable(false);
        }
    };
    useEffect(() => {
        let currentData = [...currentCategoryProducts];
        if (showAll === true && showAvailable === false) {
            currentData = [...getFilterProductsByName];
            StoreToastModule.showToast('Showing all products');
        } else if (showAll === false && showAvailable === true) {
            currentData = currentData.filter((item) => item.available);
            StoreToastModule.showToast('Showing just available products');
        }
        setCurrentCategoryProducts(currentData);
    }, [showAll, showAvailable]);
    useEffect(() => {
        const filteredtData = [...getFilterProductsByName].filter((item) => item.price <= sliderValue);
        setCurrentCategoryProducts(filteredtData);
        StoreToastModule.showToast(`Showing products under ${Format.currencyFormat(sliderValue)}`);
    }, [sliderValue]);
    useEffect(() => {
        setSliderValue(maxPrice);
    }, [maxPrice]);
    useEffect(() => {
        setCurrentCategoryProducts(getFilterProductsByName);
        StoreToastModule.showToast(`Showing products with the name '${searchText}'`);
    }, [searchText, setCurrentCategoryProducts]);
    useEffect(() => {
        const currentData = [...getFilterProductsByName];
        const { firstCondition, secondCondition } = Objects.conditionalSortOptions[sortType];
        currentData.sort((firstProduct, secondProduct) => {
            if (firstProduct.quantity > secondProduct.quantity) {
                return firstCondition;
            }
            return secondCondition;
        });
        setCurrentCategoryProducts(currentData);
    }, [sortType, setCurrentCategoryProducts]);
    const renderListProducts = () => (
        <List>
            {
                currentCategoryProducts && currentCategoryProducts.map((item) => <RenderProductItem key={item.id} item={item} navigation={navigation} />)
            }
        </List>
    );
    const renderListProductsMemo = useMemo(renderListProducts);
    return (
        <View>
            <SearchByName onChangeText={onChangeText} searchText={searchText} />
            <SortByQuantity sortType={sortType} onChangeSortBy={onChangeSortBy} />
            <FilterByPriceSlider maxPrice={maxPrice} sliderValue={sliderValue} onSlidingComplete={onSlidingComplete} />
            <FilterByAviability onPressRadio={onPressRadio} showAll={showAll} showAvailable={showAvailable} />
            {
                renderListProductsMemo
            }
        </View>
    );
};

RenderProducts.propTypes = propTypes;

export default RenderProducts;
