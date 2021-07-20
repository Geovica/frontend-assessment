<template>
  <div class="header">
    <b-container
      fluid
      class="header__bg d-flex flex-column justify-content-center align-item-center mb-3">
        <b-row>
            <b-col
              class="header__text text-center justify-content-center align-item-center">
                <h1>Hello Developer!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </b-col>
        </b-row>
    </b-container>
  </div>
  
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
  .header {
    &__bg {
      background: url(../images/1920x650.png) rgba(0, 0, 0, 0.3);
      background-blend-mode: multiply;
      height: 50vh;
      width: auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__text h1, p {
      color: white;
    }
    &__text h1 {
      font-weight: 800;
      font-size: 48px;
    }
    &__text p {
      font-size: 28px;
    }
  }
  @media (max-width: 600px) {
    .header {
      &__bg {
        background: url(../images/600x600.png)rgba(0, 0, 0, 0.3);
        background-blend-mode: multiply;
        height: 50vh;
        width: auto;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
</style>