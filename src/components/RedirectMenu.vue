<template>
    <div class="redirect-menu">
        <a href="https://lib.oau.edu.kg" class="link">Library</a>
        <a href="https://uniguide.oau.edu.kg" class="link">UniGuide</a>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.redirect-menu {
    position: fixed;
    top: 2.5rem;
    left: 3rem;
    background: white;
    z-index: 114514;
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;

    .link {
        display: flex;
        justify-content: left;
        text-decoration: none;
        color: gray;
        text-wrap: nowrap !important;
        height: fit-content;
        margin: auto;
        font-size: 1rem;
        padding: 0.45rem 2.5rem 0.45rem 2.5rem;
    }
}

[data-theme="dark"] {
    .redirect-menu {
        background: #1e1e2e;
        .link {
            color: white;
        }
    }
}
</style>