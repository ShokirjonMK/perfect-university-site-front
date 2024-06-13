<template>
    <div>

    </div>
</template>

<script>
    export default {
        mounted() {
            if(this.$route) {
                this.$router.push(`/news`)
            }
        }
    }
</script>
<style lang="scss" scoped></style>