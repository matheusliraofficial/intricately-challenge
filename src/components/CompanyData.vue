<template>
    <main class="content__main">
        <p class="content__mainDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
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
    &__form {
        &Label {
            color: get-color(label);
            font-size: get-size(t1);
            margin: get-margin(m5) 0 get-margin(m2);
        }
        &Input, &Textarea {
            border: 1px solid get-color(input);
            border-radius: 4px;
            -webkit-box-shadow: 0 2px 4px 0 rgba(184,184,184,.2);
            box-shadow: 0 2px 4px 0 rgba(184,184,184,.2);
            padding: get-padding(p2);
            outline: 0;
            resize: none;
            width: 100%;
            box-sizing: border-box;
            &::placeholder {
                color: get-color(label);
            }
        }
        &Input {
            max-width: 280px;
        }
    }
}
</style>
