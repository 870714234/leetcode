var uniquePathsWithObstacles = function (obstacleGrid) {

    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    const dp = new Array(m)
    for (let i = 0; i < m; i++) {
      dp[i] = new Array(n).fill(0)
    }

    dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0

    // 列
    for (let i = 1; i < m; i++) {
      if (obstacleGrid[i][0] === 0) dp[i][0] = dp[i - 1][0]
    }

    for (let i = 1; i < n; i++) {
      if (obstacleGrid[0][i] === 0) dp[0][i] = dp[0][i - 1]
    }

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (obstacleGrid[i][j] === 0) dp[i][j] = dp[i-1][j] + dp[i][j-1]
      }
    }

    return dp[m-1][n-1]



    // 超时
    // const dp = (m, n) => {
    //   if (obstacleGrid[m][n] === 1 || obstacleGrid[0][0] === 1) {
    //     return 0
    //   }
    //   if (m < 1 || n < 1) {
    //     if (m < 1) {
    //       for (let i = 0; i < n; i++) {
    //         if (obstacleGrid[m][i] === 1) return 0
    //       }
    //     }
    //     if (n < 1) {
    //       for (let i = 0; i < m; i++) {
    //         if (obstacleGrid[i][n] === 1) return 0
    //       }
    //     }
    //     return 1
    //   } else {
    //     return dp(m-1, n) + dp(m, n-1)
    //   }
    // }
    // return dp(obstacleGrid.length - 1, obstacleGrid[0].length - 1)
  }

  function Foo() {
    getName = function() {
      console.log(1)
    }
    console.log('this is' + this)
    return this
  }
  Foo.getName = function() {
    console.log(2)
  }
  Foo.prototype.getName = function() {
    console.log(3)
  }
  var getName = function() {
    console.log(4)
  }
  function getName() {
    console.log(5)
  }

  Foo.getName()
  getName()
  Foo().getName()
  getName()
  new Foo.getName()
  new Foo().getName()
