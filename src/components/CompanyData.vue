<template>
    <main class="content__main">
        <p class="content__mainHeader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <form class="column__start--start content__form">
            <label for="company-name" class="content__formLabel">COMPANY NAME</label>
            <input type="text" placeholder="e.g. Your Company Name" name="company-name" class="content__formInput">
            <label for="company-spend" class="content__formLabel">COMPANY SPEND</label>
            <input type="text" placeholder="e.g. 0150,000" name="company-spend" class="content__formInput">
            <label for="company-spend-ability" class="content__formLabel">COMPANY SPEND ABILITY</label>
            <input type="text" placeholder="e.g. 0150,000-0330,000" name="company-spend-ability" class="content__formInput">
            <label for="company-notes" class="content__formLabel">NOTES</label>
            <textarea name="company-notes" id="" cols="30" rows="10" placeholder="e.g. Goog Tech Company" class="content__formTextarea"></textarea>
        </form>
    </main>
</template>

<script>
    export default {
        name: "CompanyData"
    }
</script>

<style scoped lang="scss">
.content {
    &__main {
         background-color: #fff;
         border: 1px solid #ced1e0;
         -webkit-box-shadow: 0 0 2px 0 rgba(220,223,233,.3);
         box-shadow: 0 0 2px 0 rgba(220,223,233,.3);
         border-radius: 4px;
         padding: 22px;
         &Header {
             font-size: 14px;
             line-height: 22px;
             color: #5e5e5e;
         }
     }
    &__form {
        &Label {
            color: #bbbbbb;
            font-size: 12px;
            margin: 22px 0 6px;
        }
        &Input, &Textarea {
            border: 1px solid #ced2e0;
            border-radius: 4px;
            -webkit-box-shadow: 0 2px 4px 0 rgba(184,184,184,.2);
            box-shadow: 0 2px 4px 0 rgba(184,184,184,.2);
            padding: 8px;
            outline: 0;
            resize: none;
            width: 100%;
            box-sizing: border-box;
            &::placeholder {
                color: #bbbbbb;
            }
        }
        &Input {
            max-width: 280px;
        }
    }
}
</style>
