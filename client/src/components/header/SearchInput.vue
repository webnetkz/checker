<template>
    <div id="searchContainer">
        <input type="text" v-mode="searchValue" @input="changeSearchInput" id="search" placeholder="Phone" autocomplete="off">
        <button v-if="isCreate" @click="createTable();" class="create-table">Create</button>
    </div>
</template>

<script>
    import { useStore } from '@/store.js';
    import { computed } from 'vue';

    export default {
        name: 'SearchInput',
        setup() {
            const store = useStore();

            const searchInput = computed(() => store.searchInput);
            const isCreate = computed(() => store.isCreate);
            
            const changeSearchInput = (event) => {
                let phone = event.target.value.replace(/\D/g, '');
                event.target.value = phone;
                if (phone.trim() !== '' && phone.length > 6) {
                    store.changeSearchInput(phone);
                } else {
                    store.isCreate = false;
                }
            };
    
            return {
                searchInput,
                isCreate,
                changeSearchInput,
                createTable: store.createTable,
            };
        },
    }
</script>

<style scoped>
    #searchContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
    }
    input {
        background: var(--bg);
        color: var(--white);
        width: 100%;
    }

    #search:focus {
        padding-right: 30px;
    }

    .create-table {
        position: absolute;
        font-size: 1rem;
        right: calc(100% - 300px);
    }
    
    @media (max-width: 1200px) {
        .create-table {
            right: 10px;
        }
        #searchContainer,
        #search {
            width: 100%;
        }
    }
</style>