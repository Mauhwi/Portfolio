<template>
    <nav>
        <ul>
            <li>Главная</li>
            <li>Обо мне</li>
            <li>Образование</li>
            <li>Портфолио</li>
            <li>Контакты</li>
            <span class="nav-toggle">toggle</span>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavMenu'
}
</script>

<style scoped>
    ul {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
    }
    li {
        padding: 16px;
    }

    .nav-toggle {
        display: none;
    }
</style>