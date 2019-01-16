 #### if...else
 | 方式 | 每秒运行数 | 统计误差 | 出错边界 |
 | --- | --- | --- | --- |
 | if...else | 677,858,641 | ±1.13% | 1.715635880585454e-11 |
 | 表驱动 | 31,080,303 | ±1.54% | 4.599530093869206e-10|
 | switch...case| 678,831,197| ±1.93%| 2.1808558653513463e-11 |

#### for
| 方式 | 每秒运行数 | 出错边界 | 样本方差 |
| --- | --- | --- | ---
| for (let i = 0; i < arr.length; i++) | 6560.308206094562 | 0.000002875143779789936 | 1.78601493029096e-10 |
| for (let i = 0, len = arr.length; i < len; i++) | 1997.062185744526 | 0.000014799526403753801 | 4.390098031212583e-9 |
| for...in | 1989.586018362407 | 0.000014526371940669156 | 4.504183023794809e-9 |
| forEach | 1718.7050496744482 | 0.000013162414352604606 | 3.698050403569201e-9 |
| for...of | 1972.9007091724702 | 0.000006997474427562432 | 1.0451637770408151e-9 |


#### 数组

- 向数组末尾添加一个元素
  
 | 方式 | 每秒运行数 | 统计误差 | 出错边界 |
 | --- | --- | --- | --- |
 | push | 39,906,652 | ±1.15%| 2.877599677980184e-10 |
 | concat | 5,718,109 | ±0.24% | 4.156750808670601e-10 |
 | `arr[arr.length] = i` | 5,554,483| ±0.91% | 1.640821130047681e-9 |

- 移除数组某元素
  
 | 方式 | 每秒运行数 | 统计误差 | 出错边界 |
 | --- | --- | --- | --- |
 | splice | 71,883,472 | ±0.98% | 1.3685595787175874e-10 |
 | delete | 9,670,197 | ±0.31% | 3.2191592608004704e-10 |