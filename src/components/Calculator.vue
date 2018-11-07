<template>
  <div class="calculator">
    <div class="display">{{current}}</div>
    <div @click="clear" class="cell">AC</div>
    <div @click="back" class="cell delete"><i class="typcn typcn-backspace-outline"></i></div>
    <div @click="percent" class="cell">%</div>
    <div @click="operator('divide')" class="cell operator"><i class="typcn typcn-divide"></i></div>
    <div @click="append('9')" class="cell">9</div>
    <div @click="append('8')" class="cell">8</div>
    <div @click="append('7')" class="cell">7</div>
    <div @click="operator('times')" class="cell operator"><i class="typcn typcn-times"></i></div>
    <div @click="append('6')" class="cell">6</div>
    <div @click="append('5')" class="cell">5</div>
    <div @click="append('4')" class="cell">4</div>
    <div @click="operator('plus')" class="cell operator"><i class="typcn typcn-plus"></i></div>
    <div @click="append('3')" class="cell">3</div>
    <div @click="append('2')" class="cell">2</div>
    <div @click="append('1')" class="cell">1</div>
    <div @click="operator('minus')" class="cell operator"><i class="typcn typcn-minus"></i></div>
    <div @click="append('0')" class="cell zero">0</div>
    <div @click="append('.')" class="cell">.</div>
    <div @click="equals" class="cell equal"><i class="typcn typcn-equals"></i></div>
  </div>
</template>

<script>
export default {
  name: "calculator",
  data() {
    return {
      current: "0",
      previous: "",
      optr: "",
      optrFlag: false,
      prctFlag: false
    };
  },
  methods: {
    clear() {
      this.current = "0";
    },
    back() {
      this.current = this.current.slice(0, -1);
      if (!this.current) {
        this.current = "0";
      }
    },
    append(val) {
      if (this.prctFlag || this.optrFlag) {
        this.clear();
      }
      this.prctFlag = false;
      this.optrFlag = false;

      if (this.current === "0" && val !== ".") {
        this.current = val;
      } else if (val !== "." || (val === "." && !this.current.includes("."))) {
        this.current = this.current + val;
      }
    },
    percent() {
      this.current = `${Number.parseFloat(this.current) / 100}`;
      this.prctFlag = true;
    },
    operator(optr) {
      this.previous = this.current;
      this.optr = optr;
      this.optrFlag = true;
    },
    equals() {
      if (!this.optrFlag) {
        let cur = Number.parseFloat(this.current);
        let prev = Number.parseFloat(this.previous);
        switch (this.optr) {
          case "divide":
            this.current = `${prev / cur}`;
            break;
          case "times":
            this.current = `${prev * cur}`;
            break;
          case "plus":
            this.current = `${prev + cur}`;
            break;
          case "minus":
            this.current = `${prev - cur}`;
            break;
        }
        this.optrFlag = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.calculator {
  border: 1px solid #555;
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(70px, auto);

  width: 400px;
  margin: 50px auto;
  .display {
    border: 1px solid #555;
    grid-column: 1/5;
    background-color: rgb(111, 165, 245);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
  }
  .cell {
    border: 1px solid #555;
    background-color: rgb(235, 223, 223);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: rgb(248, 236, 236);
      cursor: pointer;
    }
  }
  .zero {
    grid-column: 1/3;
  }
  .operator {
    background-color: rgb(98, 179, 24);
    color: #eee;
    &:hover {
      background-color: rgb(59, 196, 54);
    }
  }
  .equal {
    background-color: rgb(13, 36, 100);
    color: #eee;
    &:hover {
      background-color: rgb(13, 2, 20);
    }
  }
  .delete {
    font-size: 1.8rem;
  }
}
</style>
