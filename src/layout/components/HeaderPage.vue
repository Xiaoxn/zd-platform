<template>
  <div class="header-wrap clear">
    <div>
      <div class="logo-warp clear">
      <!-- <svg-icon icon-class="homeBg" class="logo" /> -->
      </div>
      <div class="icon" @click="toggleClick">
        <i class="el-icon-s-fold" :class="{'is-active':isActive}" />
      </div>
    <!-- <div class="company-select-wrap">
      <el-select v-model="enterpriseId" placeholder="请选择" @change="handleChangeEnterprise">
        <el-option v-for="item in companyList" :key="item.id" :label="item.enterpriseName" :value="item.id" />
      </el-select>
    </div> -->
    </div>

    <p class="line1" />
    <div class="nav-wrap">
      <ul class="nav-list">
        <li v-for="item in menuTree" :key="item.id" class="nav-item">
          <el-popover placement="bottom-start" width="410" trigger="hover">
            <div class="sub-nav-list">
              <div
                v-for="(subItem, index) in item.children"
                :key="index"
                class="sub-nav-item"
                :class="{
                  'sub-nav-item-active': subItemCode === subItem.code,
                }"
                @click="clickSubNav(subItem)"
              >
                <div>
                  <i class="em-box" />
                  <!-- <img :src="require('@/assets/images/navIcon/' + index + '.png')" alt> -->
                  <span>{{ subItem.name }}</span>
                </div>
              </div>
            </div>
            <p v-if="item.children && item.children.length > 0" slot="reference" class="menu" :class="{ active: itemCode === item.code }">
              {{ item.name }}
            </p>
          </el-popover>
          <router-link v-if="!item.children || item.children.length == 0" :to="item.path" active-class="active">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="flex">
      <div class="notice-wrap">
        <el-badge is-dot class="item">
          <i class="el-icon-bell pr4" />
        </el-badge>
      </div>
      <div class="person-info">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <img src alt class="logo">
            <i class="user-name">{{ userInfo && userInfo.userName }}</i>
            <i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="account" icon="el-icon-user">个人账号</el-dropdown-item>
            <el-dropdown-item command="myCompany" icon="el-icon-office-building">我的企业</el-dropdown-item>
            <el-dropdown-item command="feedback" icon="el-icon-chat-line-round">产品反馈记录</el-dropdown-item>
            <el-dropdown-item command="loginOut" icon="el-icon-switch-button">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      subItemCode: '',
      itemCode: '',
      userInfo: JSON.parse(localStorage.getItem('userInfo')),
      loading: false,
      menuList: [],
      menuTree: [],
      isActive: false
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    handleChangeEnterprise(val) { },
    handleCommand(type) {
      if (type === 'loginOut') {
        // 登出操作
        this.$router.push('/login')
      }
    },
    clickSubNav(query) { },
    toggleClick() {
      this.isActive = !this.isActive
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
		width: 100%;
		height: 60px;
    display: flex;
    justify-content: space-between;
		background: #fff;
		border-bottom: 1px solid #eee;

		.logo-warp {
			float: left;

			.logo {
				width: 133px;
				height: 36px;
				float: left;
				margin-left: 20px;
				margin-top: 12px;
			}

			.text-logo {
				width: 84px;
				height: 30px;
				float: left;
				margin-left: 10px;
				margin-top: 15px;
			}
		}

		.icon {
			float: left;
			margin-left: 20px;
			margin-top: 21px;
			cursor: pointer;

			i {
				font-size: 18px;
			}
		}

		.company-select-wrap {
			float: left;
			margin-top: 10px;
			margin-left: 10px;

			::v-deep.el-select {
				width: 180px;

				.el-input__inner {
					border: none;
				}
			}
		}

		.line1 {
			width: 2px;
			height: 20px;
			background: #dbe6f3;
			float: left;
			margin-left: 10px;
			margin-right: 22px;
			margin-top: 20px;
		}

		.nav-wrap {
			width: 600px;
			height: 40px;
			float: left;
			margin-top: 10px;

			.nav-list {
				height: 40px;
				line-height: 40px;
				display: flex;

				// justify-content: space-between;
				.nav-item {
					height: 40px;
					margin-left: 30px;

					a {
						height: 38px;
						display: block;
						color: #565a66;
					}

					::v-deep.menu {
						height: 40px;
						border-bottom: 2px solid #fff;
					}

					::v-deep.menu:hover {
						border-bottom: 2px solid #3e85ff;
						color: #3e85ff;
						cursor: pointer;
					}
				}
			}
		}

		.person-info {
			float: right;
			margin-right: 20px;
			cursor: pointer;
			margin-top: 13px;

			.el-dropdown-link {
				height: 34px;
				display: flex;
				align-items: center;

				img {
					width: 34px;
					height: 34px;
					border-radius: 50%;
					overflow: hidden;
					border: 1px solid #eee;
				}

				.user-name {
					margin-left: 8px;
				}
			}
		}

		.notice-wrap {
			cursor: pointer;
			margin-top: 20px;
			width: 50px;
			height: 20px;
			position: relative;

			.el-icon-bell {
				font-size: 18px;
			}
		}
	}
.el-icon-s-fold.is-active {
  transform: rotate(180deg);
}
</style>
