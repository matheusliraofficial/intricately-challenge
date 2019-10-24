<template>
    <div class="topbar">
        <div class="topbarContainer row__center--start">
                <div class="topbar__logo row__center--center">
                    <router-link to="/">
                        <img src="../images/logo-pink.png" alt="Intricately" title="Intricately"/>
                    </router-link>
                </div>
            <div class="topbar__left row__center--start">
                <div class="row__center">
                    <form class="topbar__search">
                        <input class="topbar__searchInput" type="text" placeholder="Search Companies" />
                    </form>
                    <div class="topbar__smartlist row__center--start">
                        <p class="topbar__smartlistText">Or</p>
                        <button class="topbar__smartlistButton">New Smart List</button>
                    </div>
                </div>
                <nav class="topbar__menu row__start--center">
                    <ul class="topbar__menuPrimary row__center--start">
                        <li class="topbar__menuPrimaryItem row__center--center">PROSPECT<img src="../images/arrow-down.png"/></li>
                        <li class="topbar__menuPrimaryItem row__center--center">ALERT<img src="../images/arrow-down.png"/></li>
                        <li class="topbar__menuPrimaryItem row__center--center">LEARN<img src="../images/arrow-down.png"/></li>
                    </ul>
                </nav>
            </div>
            <div class="row__end--center topbar__right">
                <div class="row__center--end">
                    <div class="row__center--start">
                        <img src="../images/default.png" alt="Chrome Extension" title="Chrome Extension" class="topbar__icon"/>
                        <img src="../images/group.png" alt="Profile" title="Profile" class="topbar__icon"/>
                        <img src="../images/arrow-down.png"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseNavbar"
    }
</script>

<style scoped lang="scss">
.topbar {
    background-color: #3a487f;
    &__left {
        max-width: 980px;
        width: 100%;
    }
    &__right {
        max-width: 144px;
        width: 100%;
    }
    &__logo {
        max-width: 120px;
        width: 100%;
        padding: 0 8px;
    }
    &__search {
        width: 100%;
        background-color: #1f2b5a;
        border: none;
        color: #fff;
        -webkit-box-shadow: none;
        box-shadow: none;
        margin-right: 10px;
        border-radius: 4px;
        position: relative;
        &::before {
            content: url("../images/search.png");
            position: absolute;
            top: 50%;
            left: 5px;
            height: 31px;
            transform: translateY(-50%);
        }
        &Input {
            height: 40px;
            border: none;
            background-color: transparent;
            padding-left: 40px;
            color: white;
            font-size: 14px;
            text-transform: capitalize;
            width: 240px;
            &:focus{
                outline: 0;
            }
            &::placeholder {
                color: white;
            }
        }
    }
    &__smartlist {
        &Text {
            margin-right: 9px;
            color: white;
            font-size: 13px;
            text-transform: uppercase;
        }
        &Button {
            margin-right: 9px;
            font-size: 13px;
            font-weight: 500;
            line-height: 24px;
            padding: 8px 16px;
            text-transform: uppercase;
            white-space: nowrap;
            color: white;
            background-color: #5d699a;
            border-radius: 4px;
            &:hover {
                opacity: .8;
            }
        }
    }
    &__icon {
        &:first-child {
            margin-right: 16px
        }
        &:hover {
            opacity: .8;
            cursor: pointer;
        }
    }
    &__menu {
        &Primary {
            &Item {
                margin: 0 16px;
                font-size: 13px;
                height: 72px;
                color: white;
                text-transform: uppercase;
                &:hover {
                    opacity: .5;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
