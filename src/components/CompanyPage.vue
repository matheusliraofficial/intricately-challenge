<template>
    <main class="company">
        <header class="company__header column__start--center">
            <div class="row__start--center">
                <div class="row__center--center company__logo">
                    <img src="../images/squares.png" alt="Microsoft" Title="Microsoft" />
                </div>
                <div class="company__info column__start--between">
                    <h1 class="company__infoTitle">Microsoft</h1>
                    <div class="row__center--start">
                        <img src="../images/location.png"/>
                        <address class="company__infoAddress">Redmond, WA USA</address>
                    </div>
                </div>
            </div>
            <p class="company__description">At Microsoft, our mission is to empower every person and every organization on the planet to achieve more.<br>Our mission is grounded in both the world in which we live and the future we strive to create. <a href="#">View More…</a></p>
        </header>
        <div class="company__data">
            <div class="company__dataColumn">
                <ul class="company__dataList column__start--center">
                    <li class="company__dataListItem">ACTIVITIES</li>
                    <li class="company__dataListItem company__dataListItem--grid row__center--start">
                        <div class="column__start--start company__dataListItemTime">8 days ago</div>
                        <div class="column__start--start"><img src="../images/video-platform.png"/></div>
                        <p><a href="#">Cloud Ochestration</a> replaced Microsoft on <a href="#">1 property</a></p>
                    </li>
                    <li class="company__dataListItem company__dataListItem--grid row__center--start">
                        <div class="column__start--start company__dataListItemTime">10 days ago</div>
                        <div class="column__start--start"><img src="../images/content-delivery.png"/></div>
                        <p><a href="#">Express Scripts</a> replaced Microsoft on <a href="#">1 property</a></p>
                    </li>
                    <li class="company__dataListItem company__dataListItem--grid row__center--start">
                        <div class="column__start--start company__dataListItemTime">12 days ago</div>
                        <div class="column__start--start"><img src="../images/waf-d-dos-security.png"/></div>
                        <p><a href="#">Kaiser Permanente</a> replaced Microsoft on <a href="#">1 property</a></p>
                    </li>
                    <li class="company__dataListItem company__dataListItem--grid row__center--start">
                        <div class="column__start--start company__dataListItemTime">14 days ago</div>
                        <div class="column__start--start"><img src="../images/traffic-management.png"/></div>
                        <p><a href="#">Molina Healthcare</a> replaced Microsoft on <a href="#">1 property</a></p>
                    </li>
                    <li class="company__dataListItem company__dataListItem--grid row__center--start">
                        <div class="column__start--start company__dataListItemTime">15 days ago</div>
                        <div class="column__start--start"><img src="../images/dns.png"/></div>
                        <p><a href="#">Express Scripts</a> replaced Microsoft on <a href="#">1 property</a></p>
                    </li>
                    <li class="company__dataListItem company__dataListItem--grid row__center--start">
                        <div class="column__start--start company__dataListItemTime">16 days ago</div>
                        <div class="column__start--start"><img src="../images/performance-monitoring.png"/></div>
                        <p><a href="#">Kaiser Permanente</a> replaced Microsoft on <a href="#">1 property</a></p>
                    </li>
                    <li class="company__dataListItem company__dataListItem--grid row__center--start">
                        <div class="column__start--start company__dataListItemTime">17 days ago</div>
                        <div class="column__start--start"><img src="../images/saas.png"/></div>
                        <p><a href="#">Molina Healthcare</a> replaced Microsoft on <a href="#">1 property</a></p>
                    </li>
                    <li class="company__dataListItem company__dataListItem--grid row__center--start">
                        <div class="column__start--start company__dataListItemTime">18 days ago</div>
                        <div class="column__start--start"><img src="../images/content-delivery.png"/></div>
                        <p>Microsoft launched M-Cloud</p>
                    </li>
                </ul>
            </div>
            <div class="company__dataColumn">
                <ul class="company__dataList column__start--center">
                    <li class="company__dataListItem">SIMILAR COMPANIES</li>
                    <li class="company__dataListItem column__start--center">
                        <div class="row__center--center">
                            <img class="company__dataListItemLogo" src="../images/logo.png" alt="Amazon Web Services (AWS)" title="Amazon Web Services (AWS)"/>
                            <a href="#">Amazon Web Services (AWS)</a>
                        </div>
                        <div class="row__center--center">
                            <img class="company__dataListItemLogo" src="../images/logo-copy.png" alt="Oracle Corporation" title="Oracle Corporation"/>
                            <a href="#">Oracle Corporation</a>
                        </div>
                    </li>
                </ul>
                <ul class="company__dataList column__start--center">
                    <li class="company__dataListItem">COMPANY SPEND HISTORY</li>
                    <li class="company__dataListItem">
                        <img src="../images/graph.png" width="100%"/>
                    </li>
                </ul>
                <ul class="company__dataList column__start--center">
                    <li class="company__dataListItem">COMPANY SPEND HISTORY</li>
                    <li class="company__dataListItem column__start--start">
                        <div class="row__center--start company__dataListItemInner">
                            <img class="company__dataListItemLogo" src="../images/google-cloud.png" alt="Google Cloud" title="Google Cloud" />
                            <p><a href="#">Google Cloud Platform,</a><br/>Microsoft spend on product $500,00</p>
                        </div>
                        <div class="row__center--start company__dataListItemInner">
                            <img class="company__dataListItemLogo" src="../images/group-copy-2.png" alt="Google Cloud" title="Google Cloud" />
                            <p><a href="#">CenturyLink CDN,</a><br/>Microsoft spend on product $300,00</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "CompanyPage"
}
</script>

<style scoped lang="scss">
.company {
    &__logo {
        width: 64px;
        height: 64px;
        border-radius: 6px;
        background-color: white;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        margin-right: get-margin(m5);
    }
    &__info {
        height: 64px;
        &Title {
            font-size: get-size(title);
            line-height: 40px;
            color: get-color(infoColor);
        }
        &Address {
            color: get-color(addressColor);
            font-size: get-size(t2);
            margin-left: get-margin(m1);
        }
    }
    &__description {
        font-size: get-size(t3);
        line-height: 22px;
        color: get-color(description);
        margin: get-margin(m6) 0
    }
    &__data {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: get-margin(m4);
        &List {
            border: 1px solid get-color(main);
            border-radius: 4px;
            background-color: white;
            &:not(:first-child) {
                margin-top: get-margin(m4)
            }
            &Item {
                font-size: get-size(t1);
                font-weight: 500;
                font-style: normal;
                line-height: 1.9;
                color: get-color(listItemColor);
                padding: get-padding(p3) get-padding(p4);
                width: 100%;
                box-sizing: border-box;
                &:first-child{
                    font-weight: bold;
                }
                &:not(:first-child){
                    border-top: 1px solid get-color(main);
                }
                &--grid {
                    display: grid;
                    grid-template-columns: 3fr 1fr 4fr;
                }
                &Inner:not(:first-child) {
                    margin-top: get-margin(m3)
                }
                &Logo {
                    margin-right: get-margin(m3);
                }
                &Time {
                    font-weight: bold;
                    color: get-color(label)
                }
            }
        }
    }
}
</style>
