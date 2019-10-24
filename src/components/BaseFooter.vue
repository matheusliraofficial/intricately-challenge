<template>
    <footer class="footer">
        <div class="container">
            <div class="row__center--between">
                <ul class="footer__links row__center--start">
                    <li class="footer__linksItem">Pricing</li>
                    <li class="footer__linksItem">Blog</li>
                    <li class="footer__linksItem">Webinars</li>
                    <li class="footer__linksItem">Events</li>
                    <li class="footer__linksItem">Help Center</li>
                </ul>
                <ul class="footer__links row__center--start">
                    <li class="footer__linksItem">Terms and Conditions</li>
                    <li class="footer__linksItem">Privacy Policy</li>
                </ul>
            </div>
            <div class="row__center--between footer__infos">
                <p class="footer__infosCopy">© Copyright 2019, Intricately, Inc. All Rights Reserved.</p>
                <ul class="footer__infosSocial row__center--start">
                    <li class="footer__infosSocialItem">
                        <img src="../images/fill-118.png" alt="LinkedIn" title="LinkedIn"/></li>
                    <li class="footer__infosSocialItem">
                        <img src="../images/fill-92.png" alt="Facebook" title="Facebook" /> </li>
                    <li class="footer__infosSocialItem">
                        <img src="../images/fill-93.png" alt="Twitter" title="Twitter" />
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "BaseFooter"
    }
</script>

<style scoped lang="scss">
.footer {
    background-color: #f3f3f3;
    padding: 26px 32px 21px;
    &__links {
        &Item{
            display: block;
            font-size: 12px;
            line-height: 16px;
            color: #5d679a;
            padding: 0 8px;
        }
        &Item:not(:last-child){
            border-right: 1px solid #5d679a;
        }
    }
    &__infos {
        margin-top: 18px;
        &Copy {
            font-size: 12px;
            font-weight: 300;
            color: #aaa;
            margin-left: 8px;
        }
        &Social {
            &Item {
                margin: 0 8px
            }
        }
    }
}
</style>
