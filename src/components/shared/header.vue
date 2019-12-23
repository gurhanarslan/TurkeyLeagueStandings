<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
      <div class="navbar-brand">LOGO</div> <span class="navbar-toggler" data-target="#navbarmenu" data-collapse="collapse"><span class="navbar-toggler-icon"></span></span>
    <div class="collapse navbar-collapse" id="navbarmenu">

        <ul class="navbar-nav">
            <router-link tag="li" to="/" exact active-class="bg-info text-dark rounded"><a class="nav-link">Ana Sayfa</a></router-link>
            <router-link tag="li" to="/teams"  active-class="bg-info text-dark rounded"><a class="nav-link">Takım İşlemleri</a></router-link>
            <router-link tag="li" to="/fikstur"  active-class="bg-info text-dark rounded"><a class="nav-link">Fikstür</a></router-link>
            <router-link tag="li" to="/result"  active-class="bg-info text-dark rounded"><a class="nav-link">Maç Sonuçları</a></router-link>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>