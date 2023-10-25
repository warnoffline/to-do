<template>
    <div class="nav">
        <router-link class="link" to="/">
            <img src="../assets/1.png" alt="">
            <p>list</p>
        </router-link>
        <router-link class="link" to="/create">
            <img src="../assets/2.png" alt="">
            <p>create</p>
        </router-link>
    </div>
</template>

<script>
export default{

}
</script>

<style lang="scss">
.nav{
    background-color: rgba(224, 244, 245, 1);
    width: 10%;
    min-height: 10vh;
    border-radius: 0 20px 20px 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    .link{
        text-decoration: none;
        color: rgba(3, 53, 64, 1);
        font-family: 'FregatRegular';
        font-size: 20px;
        font-weight: bold;
        width: 100%;
        height: 6vh;
        display: flex;
        justify-content: start;
        align-items: center;
        img{
            width: 30%;
            margin-left: 10%;
        }
    }
    .link:hover{
        background-color: rgba(167, 209, 210, 1);
        border-radius: 0 20px 20px 0;
    }
}
@media screen and (max-width: 1100px) and (min-width: 800px) {
    .nav{
        width: 20%;
    }
}
@media screen and (max-width: 799px) and (min-width: 500px){
    .nav{
        width: 30%;
    }
}
@media screen and (max-width: 499px) and (min-width: 250px){
    .nav{
        width: 100%;
        flex-direction: row;
        border-radius: 0 0 20px 20px;
        top:0;
        position: sticky;
        .link{
            width: 50%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 4%;
            img{
                width: 25%;
                margin-left: 0;
            }
        }
        .link:hover{
            background-color: none;
            border-radius: 0 0 20px 20px;
        }
    }
}
</style>
