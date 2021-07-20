<template>
	<div class="content">
		<b-container fluid="lg" class="content__container mt-5">
			<b-row>
				<b-col col lg="12" class="d-flex justify-content-center">
					<b-tabs content-class="tab mt-3" fill>
            <b-tab class="tab__link" :title="item.title" v-for="item in items" :key="item.title">
              <b-card-text class="tab__text">
                <p v-html="item.content"></p>
              </b-card-text>
            </b-tab>
					</b-tabs>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import itemsContent from '../data/data.json'

export default {
	data() {
		return {
			items: itemsContent
		}
	}
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;700&display=swap');

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    
    &__container {
      max-width: 600px;
      max-height: 100%;
      height: 50vh;
      width: 100%;
      margin-top: 10%;
      transition: 0.3s ease;
      box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.068);
      padding-right: 0;
      padding-left: 0;
      border-bottom: 5px solid #3d3d3d;
    }
  }
  .tab {
    &__text {
      padding: 1.25rem;
    }
    &__text p {
      font-family: 'Montserrat', sans-serif;
      line-height: 1.61em;
      font-weight: 300;
      color: #2c2c2c;
      font-size: 16px;
    }
  }
  
</style>