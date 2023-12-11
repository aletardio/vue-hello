const { createApp } = Vue

createApp ({
    data() {
        return {
            message: 'Hello Vue!',
            imgName: 'https://wallpapers-clan.com/wp-content/uploads/2023/12/miles-morales-city-landscape-desktop-wallpaper-preview.jpg'
        }
    }
}).mount('#app')