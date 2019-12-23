<template>
  <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>22/12/2019</strong> | gurhanarslan
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong> 1. </strong>
        <span class="badge badge-success">{{getTeams[0].TeamsName}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong> 2.</strong>
        <span class="badge badge-primary"> {{getTeams[1].TeamsName}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong> 3. </strong>
        <span class="badge badge-warning"> {{getTeams[2].TeamsName}}</span>
    </span> 
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong> 16. </strong>
        <span class="badge badge-danger"> {{getTeams[15].TeamsName}}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong> 17. </strong>
        <span class="badge badge-danger"> {{getTeams[16].TeamsName}}</span>
    </span>
     <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong> 18. </strong>
        <span class="badge badge-danger"> {{getTeams[17].TeamsName}}</span>
    </span>
</nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed: mapGetters(['getTeams'])

}
</script>

<style>

</style>