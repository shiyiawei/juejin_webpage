<template>
  <div class="sidebar-block download-block">
    <div class="download-body">
      <a>
        <div :class="[isWhite? 'topBarDay':'topBarNight', 'app-link']">
          <div class="content-box">
            <div :class="[isWhite? 'topBarDay':'topBarNight', 'headline']">哈喽~</div>
            <div :class="[isWhite? 'topBarDay':'topBarNight', 'desc']">点亮在社区的每一天</div>
          </div>
          <div class="qiandao">            
            <el-button type="primary" plain size="small" 
                       class="qiandao-btn"
            >
              去签到
            </el-button>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
  
  <script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['isWhite'])
    },
    created() {
      console.log('Topicwhite', this.isWhite);
    }
  }
  
  </script>
  
  <style scoped lang="scss">
    .qiandao{
      display: flex;
      width: 100px;
      .qiandao-btn{
      margin: auto;
      
      }
    }
    .sidebar-block{
      background-color: #ffffff;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
      border-radius: 2px;
      margin-bottom: 1.3rem;
      font-size: 1.16rem;
      line-height: 1.29;
      color: #333;
    }
    .sidebar-block.download-block{
        width: 240px;
        position: relative;
        margin-bottom: 1.0rem;
        border-radius: 2px;
        a{
          text-decoration: none;
          cursor: pointer;
          color: #909090;
          .app-link{
            width: 240px;
            display: flex;
            align-items: center;
            padding: 0.8rem;
            display: flex;
            align-items: center;
            padding: 0.8rem;
            .content-box{
              .headline{
                  font-weight: 1000;
                  font-size: 15px;
                  line-height: 22px;
                  color: #1d2129;
              }
              .desc{
                  margin-top: 0.5rem;
                  font-size: 12px;
                  line-height: 20px;
                  color: #9ea5ad;
              }
            }
          }
        }
    }
  </style>