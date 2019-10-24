<template>
    <div class="container content">
       <div class="content__breadcumbs">
           <ul class="row__center--start">
               <li class="content__breadcumbsItem">HOME</li>
               <li class="content__breadcumbsItem">{{ routeName }}</li>
           </ul>
       </div>
       <div class="content__container">
           <aside class="content__menu">
               <ul class="content__menuContainer">
                   <router-link to="/">
                       <li class="content__menuContainerItem" :class="currentPath === '/' ? 'content__menuContainerItem--active' : ''">COMPANY DATA</li>
                   </router-link>
                   <li class="content__menuContainerItem">COMPANY TABLE</li>
                   <router-link to="/company">
                       <li class="content__menuContainerItem" :class="currentPath === '/company' ? 'content__menuContainerItem--active' : ''">COMPANY PAGE</li>
                   </router-link>
               </ul>
           </aside>
           <router-view/>
       </div>
    </div>
</template>

<script>
export default {
    name: "BaseContent",
    computed: {
        currentPath() {
            return this.$route.path
        },
        routeName() {
            return this.$route.name
        }
    }
}
</script>

<style scoped lang="scss">
.content {
    margin: 22px auto;
    &__breadcumbs {
        margin-bottom: 22px;
        &Item {
            color: #7e7e7e;
            font-size: 12px;
            &:not(:first-child)::before {
                content: '/';
                padding: 0 5px;
                color: #ccc
            }
        }
    }
    &__container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 25px
    }
    &__menu {
        &Container {
            &Item {
                padding: 22px 0 22px 22px;
                width: calc(100% - 24px);
                background-color: #fff;
                border: 1px solid #ced1e0;
                -webkit-box-shadow: 0 0 2px 0 rgba(220,223,233,.3);
                box-shadow: 0 0 2px 0 rgba(220,223,233,.3);
                font-size: 14px;
                font-weight: bold;
                text-decoration: none !important;
                color: #68749d;
                &--active {
                    border-left: 3px solid #344375;
                    background-color: #fafbfc;
                    color: #5e5e5e;
                    padding-left: 20px
                }
            }
            a:first-child > &Item {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                border-bottom: 0;
            }
            a:last-child > &Item {
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                border-top: 0
            }
        }
    }
}
</style>
