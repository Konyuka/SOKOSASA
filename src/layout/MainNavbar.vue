<template>

  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/admin/products">
        <button type="button" name="button" class="btn btn-danger btn-sm"> <span> <i class="fas fa-leaf"></i> Sell Produce </span> </button>
      </router-link>
    </template>
    <template slot="navbar-menu">

      <li class="nav-item rudi">
        <nav-link
          tag="li"
          class="nav-link "
          to="/register"
        >
          <button type="button" name="button" class="btn btn-primary btn-sm rudi"> <span> <i class="fas fa-user-plus"></i> Farmers Sign up </span> </button>
        </nav-link>
      </li>

    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
