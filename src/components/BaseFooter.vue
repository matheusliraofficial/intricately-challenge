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
    background-color: get-color(footer);
    padding: get-padding(p6) get-padding(p7) get-padding(p5);
    &__links {
        &Item{
            display: block;
            font-size: get-size(t1);
            line-height: 16px;
            color: get-color(button);
            padding: 0 get-padding(p2);
        }
        &Item:not(:last-child){
            border-right: 1px solid get-color(button);
        }
    }
    &__infos {
        margin-top: get-margin(m5);
        &Copy {
            font-size: get-size(t1);
            font-weight: 300;
            color: #aaa;
            margin-left: get-margin(m3);
        }
        &Social {
            &Item {
                margin: 0 get-margin(m3)
            }
        }
    }
}
</style>
