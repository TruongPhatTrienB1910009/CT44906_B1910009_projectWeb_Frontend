<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a href="/notes" class="navbar-brand">Ứng Dụng Sổ Ghi Chú Cá Nhân</a>
        <div class="mr-auto navbar-nav">
            <li class="nav-item">
                <router-link :to="{ name: 'notes' }" class="nav-link">
                    Ghi Chú
                    <i class="fas fa-address-book"></i>
                </router-link>
            </li>
        </div>
    </nav>
</template>