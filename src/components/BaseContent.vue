<template>
    <div :class="currentPath === '/company' ? 'content--company' : 'content' ">
        <div class="container content__box">
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
    background-color: white;
    &--company {
        background-color: get-color(companyBg);
    }
    &__box {
        padding: get-padding(p5) 0;
    }
    &__breadcumbs {
        margin-bottom: get-margin(m6);
        &Item {
            color: get-color(breadColor);
            font-size: get-size(t1);
            &:not(:first-child)::before {
                content: '/';
                padding: 0 get-padding(p1);
                color: get-color(separatorColor)
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
                padding: get-padding(p5) 0 get-padding(p5) get-padding(p5);
                width: calc(100% - #{get-padding(p5)});
                background-color: white;
                border: 1px solid #ced1e0;
                -webkit-box-shadow: 0 0 2px 0 rgba(220,223,233,.3);
                box-shadow: 0 0 2px 0 rgba(220,223,233,.3);
                font-size: get-size(t3);
                font-weight: bold;
                text-decoration: none !important;
                color: get-color(tabItemColor);
                &--active {
                    border-left: 3px solid get-color(tabItemActiveBorderColor);
                    background-color: get-color(tabItemActiveBgColor);
                    color: get-color(tabItemActiveColor);
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
