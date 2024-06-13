<template>
  <div class="container hash-tags">
    <div class="row">
      <div class="col-9 hash-tags pd" style="padding-left: 0">
        <span>#xalqaro</span>
        <span>#massmedia</span>
        <span>#allamjanov</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "realHashTags",
};
</script>

<style lang="scss" scoped>
.hash-tags {
  margin-top: 28px;

  span {
    font-size: 1.1875rem;
    line-height: 144.5%;
    color: #9fabb9;
    background: #eef3f8;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    margin-right: 10px;
    transition: 0.3s all;
    &:hover {
      color: #6db0ff;
    }
  }
}
</style>
