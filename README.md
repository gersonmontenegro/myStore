
This time I'm going to write a mobile app about a store using React Native.

There are several features that I need to achieve:

 - Redux.
 - Unit tests.
 - Shopping cart.
 - Recursive Categories/Product list. This is kinda special because I have to read some depth nested structure, but there is not a specific depth level.
 - Java module: Native modules implementation.

The main structure, or at least an initial one is describe by the graphic below:

![enter image description here](https://lh3.googleusercontent.com/qMS5zFvn_Xqeks6-YfG89cE6Qj0tbDNBkEIeYHWEwVZvdK41Agc_TksopCCmurI4I8aQbvDRXLtL "Main structure")

In order to get a better idea about how the app will looks like, I drawn some mockups:

![enter image description here](https://lh3.googleusercontent.com/d0xm9f2uQsNChK2uZZ-1HcVxLf53z4hlwh9Km9JbRbrAA0fsTyyw0izQCGWvpBBcsiRAD8RN7qRW "Mockups")

There are 4 views, at least in the first iteration. I decided to make that because is enough for the initial requirement .

Now, I'll describe every view and all possible tasks that it requires:

1. **Home view**

![enter image description here](https://lh3.googleusercontent.com/pj-9_AE_Skx5AuCtCp77HCvKY9ZcOOdv7chYrjlJBsSC4mphZAYPRtpj6VuUUw5HFBxSwckhiQQ0 "Home view")

It's the first interface the user is able to interact with. Through this view, the user can see the main categories, go to the cart, and search a product. Let's see the features to make:
 
 a. Search input. The user can search a product from here using a key word/phrase.
 
 b. Search button. Used to start the search.
 
 c. Main categories list.
 
 d. Main button on the tab bar menu. The user can go back to Home using it.
 
 e. Cart button on the tab bar menu. The user can go to the shopping cart from here.
 
 2. **Recursive list view**
 
![enter image description here](https://lh3.googleusercontent.com/PYh82Q-Qius_6C-3felS07kNI-nFmMbS-ZG7IUTZ5KrIlgPXQO6Jls5lfQZBH9Y_G128tDwfJZmG "Recursive categories/products list")

Through this interface, the user can list every single category, and also subcategory and products if there are no more subcategories in the tree. Just because the depth level is unknown, is't necessary to make it recursive.

Features to make here:

a. Subcategory list.

b. Product list. When there are no subcategories, products are listed. Also, we'll have a button to go to the product detail.

 3. **Product view**
 
 ![enter image description here](https://lh3.googleusercontent.com/DnbJ67QkgydE-iryGL4TTDYVI3fsGkfO4XHIQIr3seYCSTaw0wLgqAmsFO-Lp7C9tyU-2cZQ7ikI "Product view")

Thanks to this interface, the user is capable to see not only the details of the product but also, can add a specific quantity to the shopping cart if the user wishes it.

Features on this view:
a. Back button available to get back to the list.

b. Product name.

c. Product price.

d. Product image.

e. Like/Unlike button.

f. Like counter.

g. Decrease product quantity.

h. Current quantity. Quantity to add to the cart.

i. Increase product quantity.

j. Go to cart view.

 4. **Cart view**
 
![enter image description here](https://lh3.googleusercontent.com/UiWjL4JIT8vxcNSNH3mlSFXeX2mfdQO9I_YkW_2mmWccbWsInLUrEM95VSbG6g_SDYXhG4mICNV6 "Cart view")

Shopping cart view is the final step before the user do the checkout.

In this view, the user can edit the product quantity to buy.

Features on this interface:

a. Back button to get back to where the user was.

b. Total amount for the current shop.

c. Product name, and product price.

d. Check option to add, or not to add this product to the current cart.

e. Add/Increase quantity buttons.

f. Subtotal amount. Basically product price multiplied by quantity.

g. Remove this product from the cart.

h. Checkout button. Pressing this button, the user can finish the shopping process.


Let's start!

In spite it seems like Home is the first view to make, I think it could be the Recursive list view, because at the end of the day, Home is just using this component with some initial data, so let's do that.

After a while, I got a first demo. No matter how depth the structure can be, it'll works:

<img src="https://github.com/gersonmontenegro/myStore/blob/master/src/assets/gif/recursive_list.gif" width="300px">

> By the way, if you are asking about why there are so much people with
> beard, I let you know I'm using [placebeard.it](http://placebeard.it)
> to fake de images :D ...is a good images provider without restrictions
> to load them from an app.

Now it's time to build the home interface. In order to achieve that, I do need to change a little bit the stack navigator, because home requires a tab button navigator, but also, requires some others available views, like product detail and the recursive list interface, but we don't need it on the footer tab button.

The way to solve this, is to create an stack with the tab button navigator, and another one with the other two views. Graphically is more like

+Navigator

+---Tab Button Navigator

+------Home

+------Cart

+---Product Detail

+---Recursive List


With that in mind, I'm going to create the navigation structure using [react-navigation](https://reactnavigation.org/docs/en/hello-react-navigation.html), [react-navigation-tabs](https://reactnavigation.org/docs/en/tab-based-navigation.html), and [react-navigation-stack](https://github.com/react-navigation/stack) libraries.

Also, there were need to run this command:

    yarn add react-native-gesture-handler react-native-reanimated react-nat
    ive-screens react-native-safe-area-context @react-native-community/masked-view

After coding for a little while, I got a first preview for the tab button footer:

<img src="https://github.com/gersonmontenegro/myStore/blob/master/src/assets/gif/first_tab_home.gif" width="300px">

Product detail is now in preview version, and it looks like above:

<img src="https://github.com/gersonmontenegro/myStore/blob/master/src/assets/gif/product_detail.gif" width="300px">

At this moment, our store is almost finish, at least in a first preview. We can add products to the cart, and then, we can see the shopping cart and make some editions as I show it below

<img src="https://github.com/gersonmontenegro/myStore/blob/master/src/assets/gif/cart_preview.gif" width="300px">


> Written with [StackEdit](https://stackedit.io/).

