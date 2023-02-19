<template>
  <div>
    <div class="parent">
      <div class="son"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
// 第一种
/* .parent {
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  .son {
    width: 300px;
    height: 300px;
    background: yellow;
  }
} */
// 第二种
/* .parent {
  display: flex;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 1);

  .son {
    margin: auto;
    width: 300px;
    height: 300px;
    background: yellow;
  }
} */
// 第三种
/* .parent {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 1);

  .son {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: yellow;
  }
} */
// 第四种
.parent {
  display: grid;
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 1);
  .son {
    justify-self: center;
    align-self: center;
    width: 300px;
    height: 300px;
    background: yellow;
  }
}
</style>
