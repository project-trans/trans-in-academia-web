<template>
    <button class="theme-button" v-on:click="changeTheme()" :key="theme.value">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-if="getTheme() !== 'dark'" class="icon">
            <g class="path" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 3v2m0 14.004v2M5 12H3m18 0h-2m0-7l-2 2M5 5l2 2m0 10l-2 2m14 0l-2-2"/>
            </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" v-else class="icon">
            <path class="path" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M21 12.808c-.5 5.347-5.849 9.14-11.107 7.983C-.077 18.6 1.15 3.909 11.112 3C6.394 9.296 14.618 17.462 21 12.808"/>
        </svg>
    </button>
</template>

<script setup>
import {ref} from "vue";
import {applyTheme, getTheme, setTheme} from "@/logic/theme";

let theme = ref(getTheme())

function changeTheme() {
    if (theme.value === 'dark') {
        setTheme('light')
    } else {
        setTheme('dark')
    }
    applyTheme()
    theme.value = getTheme()
}
</script>

<style lang="scss">
.theme-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: transparent;
    border-style: none;
    border-radius: 20px;
    transition: all 0.5s ease;
    position: absolute;
    right: 40px;
    top: 5px;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }

    .icon {
        color: #0000009a;

        .path {
            stroke: #0000009a
        }
    }
}

[data-theme="dark"] {
    .theme-button {
        background: transparent;

        &:hover {
            background: transparent;
        }

        .icon {
            color: #FFFFFF9a !important;
            transition: all 0.5s ease !important;

            &:hover {
                filter: drop-shadow(0px 0px 5px #c6d0f5);
            }

            .path {
                stroke: #FFFFFF9a !important;
            }
        }
    }
}
</style>