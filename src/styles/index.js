const generalStyles = {
    simpleContainer: {
        flex: 1,
    },
    simpleRowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    simpleJustifyCenterContainer: {
        flex: 1,
        justifyContent: 'center',
    },
};

const ListDataStyles = {
    renderProducts: {
        rowContainer: {
            flexDirection: 'row',
        },
        centerContainer: {
            justifyContent: 'center',
        },
        pickerWidth: {
            width: 300,
        },
        sliderParts: {
            left: {
                flex: 1,
                textAlign: 'right',
            },
            body: {
                flex: 3,
            },
            right: {
                flex: 1,
            },
            sliderValue: {
                flex: 1,
                textAlign: 'center',
            },
        },
    },
};

export {
    generalStyles,
    ListDataStyles,
};
