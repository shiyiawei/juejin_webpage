<template>
  <div class="artic-item" @click="toDetail()">
    <div class="artic-item__info">
      <ul class="artic-item__meta">
        <li class="meta-item">
          <span class="meta-item__username">
            <nuxt-link
              :to="'/user/' + uid"
              target="_blank"
              @click.native="(e) => e.stopPropagation()"
            >{{ item.attributes.author.data.attributes.user_name }}
            </nuxt-link>
          </span>
        </li>
        <li class="meta-item">{{ item.attributes.ctime | formatTime }}</li>
        <!-- <li class="meta-item">
          <template v-if="item.tags.length">
            <nuxt-link class="meta-item__tag" :to="'/tag?name='+tag.tag_name" v-for="tag in item.tags" :key="tag.id" target="_blank" @click.native="(e) => e.stopPropagation()">{{ tag.tag_name }}</nuxt-link>
          </template>
        </li> -->
      </ul>
      <p
        class="artic-item__title ellipsis"
        v-html="highlight.title || item.attributes.title"
      ></p>
      <p
        class="artic-item__desc"
        v-html="
          highlight.description ||
            highlight.text ||
            item.attributes.description
        "
      ></p>
      <ul class="artic-item__action">
        <li class="action-item" :class="{active: item.attributes[likeField]}" @click.stop="articleLike">
          <img v-if="item.attributes[likeField]" class="action-item__icon" src="~assets/images/png/like.png">
          <img v-else class="action-item__icon" src="~assets/images/png/like.png">
          {{ item.attributes[likeCountField] }}
        </li>
        <li class="action-item" @click.stop="toDetail('#comment')">
          <img class="action-item__icon" src="~assets/images/png/comment.png">
          {{ item.attributes.comment_count }}
        </li>
      </ul>
    </div>
    <img
      v-if="item.attributes.image"
      :src="getUrl(item.attributes.image.data.attributes.url)"
      class="artic-item__cover"
    />
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    hasDesc: {
      type: Boolean,
      default: false,
    },
    highlight: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    // ???????????????????????????  ???????????????????????????
    likeField() {
      let fields = ["is_digg"];
      return fields.filter((key) =>
        this.item[key] == undefined ? false : key
      )[0];
    },
    // ????????????????????????  ???????????????????????????
    likeCountField() {
      let fields = ["digg_count"];
      return fields.filter((key) =>
        this.item.attributes[key] == undefined ? false : key
      )[0];
    },
    // ?????? uid???
    uid() {
      return this.item.attributes.author.data.id;
    },
    detailId() {
      console.log("?????????detailId()????????????");
      console.log(
        "detailId()????????????this.item.article_id???" + this.item.article_id
      );
      console.log(this.item);
      return this.item.id;
    },
  },
  methods: {
    getUrl(url) {
      return `http://localhost:1337${url}`;
    },
    toDetail(hash = "") {
      console.log("?????????articleItem.vue???toDetail????????????");
      let routeUrl = this.$router.resolve({
        name: "detail-id",
        params: {
          id: this.detailId,
        },
      });
      console.log(
        "articleItem.vue???toDetail???????????????detailId???" + this.detailId
      );
      console.log(
        "articleItem.vue???toDetail???????????????routeUrl.href???" + routeUrl.href
      );
      window.open(routeUrl.href + hash, "_blank");
      // window.open("/detail/2" + hash, '_blank')
    },
    async articleLike() {
      if (!this.$store.state.auth.token) {
        this.$loginModal(this);
        return;
      }
      let id = this.item.id;
      if (id && this.likeField && this.likeCountField) {
        let res = await this.$api.articleLike({
          entryId: id,
          isCollected: !this.item[this.likeField],
        });
        // ????????????????????????
        if (res.s === 1) {
          this.$emit("update:item", {
            ...this.item,
            [this.likeField]: !this.item[this.likeField],
            [this.likeCountField]: this.item[this.likeField]
              ? Number(this.item[this.likeCountField]) - 1
              : Number(this.item[this.likeCountField]) + 1,
          });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.artic-item {
  display: flex;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 1px solid #dbdbdb;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.01);
    border-bottom: 1px solid #1c1c1c;
  }
}

.artic-item__info {
  flex: 1 1 auto;
  overflow: hidden;
}

.artic-item__cover {
  flex: 0 0 auto;
  width: 120px;
  height: 80px;
  margin-left: 24px;
  background-color: #f4f4f4;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2px;
}

.artic-item__meta {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #b2bac2;

  .meta-item {
    &::after {
      content: "|";
      margin: 0 5px;
      color: #b2bac2;
    }

    &:last-child::after {
      content: "";
    }
  }

  .mate-item--hot {
    color: #f70;
  }

  .mate-item--post {
    color: #b71ed7;
  }

  .meta-item__username {
    cursor: pointer;

    &:hover {
      color: $theme;
    }
  }

  .meta-item__tag {
    cursor: pointer;

    &:hover {
      color: $theme;
    }

    &::after {
      content: " / ";
      color: #b2bac2;
    }

    &:last-child::after {
      content: "";
    }
  }
}

.artic-item__title {
  display: block;
  margin: 10px 0 16px;
  line-height: 1.3;
  font-size: 17px;
  font-weight: 700;
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ::v-deep em {
    color: #e8001c;
  }
}

.artic-item__desc {
  width: 800px;
  margin-bottom: 14px;
  font-size: 13px;
  color: #5b6169;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ::v-deep em {
    color: #e8001c;
  }
}

.artic-item__action {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 13px;
  color: #b2bac2;

  .action-item {
    display: flex;
    align-items: center;
    height: 26px;
    padding: 0 10px;
    border: 1px solid #edeeef;

    .action-item__icon {
      margin-right: 3px;
      display: block;
      width: 16px;
      height: 16px;
    }

    &.active {
      color: $success;
    }

    &:last-child {
      border-left: 0;
    }
  }
}
</style>
