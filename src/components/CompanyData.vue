<template>
    <main class="content__main">
        <p class="content__mainDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <form class="column__start--start form">
            <DataInput placeholder="e.g. Your Company Name" type="text" inputName="company-name" label="COMPANY NAME" error="Company name is required."/>
            <DataInput placeholder="e.g. $150,000" type="currency" inputName="company-spend" label="COMPANY SPEND" error="Invalid spend."/>
            <DataInput placeholder="e.g. $150,000 - $330,000" type="compare" inputName="company-spend-ability" label="COMPANY SPEND ABILITY" error="Invalid spend ability"/>
            <DataInput placeholder="e.g. Goog Tech Company" inputName="company-notes" label="NOTES" type="textarea"/>
        </form>
    </main>
</template>

<script>
import DataInput from "Components/DataInput.vue";

export default {
    name: "CompanyData",
    components: {
        DataInput
    }
}
</script>

<style lang="scss">
.content {
    &__main {
         background-color: white;
         border: 1px solid get-color(main);
         -webkit-box-shadow: 0 0 2px 0 rgba(220,223,233,.3);
         box-shadow: 0 0 2px 0 rgba(220,223,233,.3);
         border-radius: 4px;
         padding: get-padding(p5);
         &Description {
             font-size: get-size(t3);
             line-height: 22px;
             color: get-color(description);
         }
     }
}
</style>
