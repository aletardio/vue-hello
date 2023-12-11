const { createApp } = Vue

createApp ({
    data() {
        return {
            message: 'Hello Vue!',
            mainImg: 'https://wallpapers-clan.com/desktop-wallpapers/miles-morales-city-landscape/'
        }
    }
}).mount('#message')