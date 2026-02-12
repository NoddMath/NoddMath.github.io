+++
date = '2020-01-01T00:00:00-00:00'
draft = true
title = "Drafts"
categories = 'Math'
+++

> [!important] A vector field is essentially a section of the tangent bundle.

> [!info] Lie algebra
> A **Lie algebra** over a field $\mathbb{F}$ is a vector space $\mathfrak{g}$ over $\mathbb{F}$ equipped with a bilinear map $[\cdot,\cdot]:\mathfrak{g}\times \mathfrak{g}\to \mathfrak{g}$, called a **Lie bracket**, satisfying the following properties:
> - Skew-symmetry: $[x,y]=-[y,x]$ for all $x,y\in \mathfrak{g}$.  
> - Jacobi identity: $[x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0$ for all $x,y,z\in \mathfrak{g}$.
> 
> In particular, $\mathfrak{g}$ is commutative if $[x,y]=0$ for all $x,y\in \mathfrak{g}$.

> [!info] Lie group
> A **Lie group** is a smooth manifold $G$ equipped with a group structure such that the multiplication map $m:G\times G\to G$, given by $m(g,h)=gh$, and the inversion map $i:G\to G$, given by $i(g)=g^{-1}$, are both smooth.

> [!info] Conformal map
> Let $U,V\subseteq \mathbb{C}$ be open sets. A holomorphic function $f:U\to V$ is called a **conformal map** or **biholomorphism** if it is bijective and its inverse $f^{-1}:V\to U$ is also holomorphic. In this case, we say that $U$ and $V$ are **conformally equivalent** or **biholomorphic**.

> [!info] Presheaf
> A **presheaf** $\mathcal{F}$ on a topological space $X$ consists of the following data:
> - For each open set $U\subseteq X$, a set $\mathcal{F}(U)$.
> - For all open sets $V\subseteq U$, a restriction map $\text{res}_U^V:\mathcal{F}(U)\to \mathcal{F}(V)$.
> 
> They satisfy the following axioms:
> - For each open set $U\subseteq X$, $\text{res}_U^U=\text{id}_{\mathcal{F}(U)}$.
> - For all open sets $W\subseteq V\subseteq U$, $\text{res}_U^W=\text{res}_V^W\circ \text{res}_U^V$.

> [!info] Sheaf
> Given a topological space $X$, a **sheaf** $\mathcal{F}$ on $X$ is a presheaf such that for every open set $U\subseteq X$ and every open cover $\{U_i\}$ of $U$:
> - If $s,t\in \mathcal{F}(U)$ satisfy $\text{res}_U^{U_i}(s)=\text{res}_U^{U_i}(t)$ for all $i$, then $s=t$.
> - If $s_i\in \mathcal{F}(U_i)$ for each $i$ satisfy $\text{res}_{U_i}^{U_i\cap U_j}(s_i)=\text{res}_{U_j}^{U_i\cap U_j}(s_j)$ for all $i,j$, then there exists $s\in \mathcal{F}(U)$ such that $\text{res}_U^{U_i}(s)=s_i$ for all $i$.

> [!note] Inverse function theorem
> Let $f:M\to N$ be a smooth map between smooth manifolds. If the derivative $Df(x)$ is invertible at some point $x\in M$, then there exists an open neighborhood $U$ of $x$ in $M$ and an open neighborhood $V$ of $f(x)$ in $N$ such that $f:U\to V$ is a diffeomorphism.

> [!info] Local compactness
> A topological space $X$ is **locally compact** if for every point $x\in X$, there exists an open neighborhood $U$ of $x$ and a compact subset $K$ of $X$ such that $x\in U\subseteq K$.

> [!note] Excision theorem
> Let $X$ be a topological space and $A\subseteq X$ a subspace. If another subspace $U\subseteq A$ satisfies $\overline{U}\subset \text{Int}(A)$, then the inclusion $(X\setminus U,A\setminus U)\hookrightarrow (X,A)$ induces an isomorphism on relative homology groups: $$H_n(X\setminus U,A\setminus U)\cong H_n(X,A)\quad \text{for all } n.$$

> [!info] Fiber
> Given topological spaces $X$ and $Y$, the **fiber** of a continuous map $f:X\to Y$ over a point $y\in Y$ is the preimage $f^{-1}(y)=\{x\in X\mid f(x)=y\}$.

> [!info] Section
> Let $\pi:E\to B$ be a map between topological spaces. A **section** of $\pi$ is a continuous map $s:B\to E$ such that $\pi\circ s=\mathrm{id}_B$.

> [!info] Ideal
> An **ideal** of a ring $R$ is a subset $I\subseteq R$ such that:
> - $(I,+)$ is a subgroup of $(R,+)$.
> - For all $r\in R$ and $a\in I$, both $ra$ and $ar$ are elements of $I$.

> [!danger] Remark
> The above definition describes what is more precisely called a **two-sided ideal**. In general, for a ring $R$, one can also define left and right ideals, which satisfy $ra\in I$ and $ar\in I$ for all $r\in R$ and $a\in I$, respectively.

> [!info] Covering space
> A **covering space** of a topological space $X$ is a topological space $\widetilde{X}$, together with a continuous surjective map $p:\widetilde{X}\to X$, called the **covering map**, satisfying the following conditions:
> - For every $x\in X$, there exists an open neighborhood $U\subseteq X$ of $x$ such that $p^{-1}(U)$ is a disjoint union of open sets in $\widetilde{X}$, that is, $p^{-1}(U)=\bigsqcup_{\alpha} V_{\alpha}$, where each $V_{\alpha}$ is open in $\widetilde{X}$. Such an open set $U$ is called **evenly covered** by $p$.
> - Each restriction $p|_{V_{\alpha}}:V_{\alpha}\to U$ is a homeomorphism.

> [!info] Fibration
> A **fibration** is a map that has the homotopy lifting property with respect to all spaces.

> [!info] Exact sequence
> An **exact sequence** is a sequence of group homomorphisms
> $$\cdots\to A_{i-1}\xrightarrow{f_{i-1}} A_i\xrightarrow{f_i} A_{i+1}\to \cdots$$
> such that at each stage, the image of one map equals the kernel of the next, that is, $\text{im}(f_{i-1})=\ker(f_i)$ for all $i\in \mathbb{Z}$.

> [!bug] Two types of exact sequences
> Exact sequences are often classified by their length. The sequence defined above is an example of a long exact sequence. In contrast, a short exact sequence is one of the form $0\to A\xrightarrow{f} B\xrightarrow{g} C\to 0$, where $\text{im}(f)=\ker(g)$.

> [!info] Simply connectedness
> A topological space is called **simply connected** if it is path-connected and has a trivial fundamental group.

> [!note] Riemann mapping theorem
> For any open subset $U\subset \mathbb{C}$, if it is simply connected, then there exists a conformal map $f:U\to \mathbb{D}$, where $\mathbb{D}$ is the open unit disk.

> [!tip] Conformally equivalent sets in the complex plane
> Any two proper simply connected open subsets in $\mathbb{C}$ are conformally equivalent.

> [!note] Uniformization theorem
> Every simply connected Riemann surface is conformally equivalent to exactly one of the following three: the Riemann sphere $\widehat{\mathbb{C}}$, the complex plane $\mathbb{C}$, or the open unit disk $\mathbb{D}$.


下面是 **Module A（辛几何第一门课内容，略多一点）** 的完整大纲。我把它做成 **16 讲主线 + 2 讲可选工具讲**。每讲都尽量“吃饱”，内容偏少的我已经合并掉了。

> 结构主要按 Cannas 的课程节奏组织（线性代数、余切丛、Lagrangian、生成函数、局部理论、Hamilton 系统、moment map 主题），并用 McDuff–Salamon 把“Almost complex / 群作用与约化 / 凸性与 toric”这些块补成更标准的版本。

---

## Module A 主线（16 lectures）

### A1 线性辛向量空间与标准形

- 交替形式、非退化、偶维性
    
- 辛基与标准辛形式
    
- (Sp(2n)) 的定义与基本性质  
    

### A2 Lagrangian 线性代数

- isotropic / coisotropic / Lagrangian
    
- 辛正交补与维数公式
    
- 线性模型中的典型例子  
    

### A3 辛流形：定义、体积与第一批例子

- 辛形式的闭性与非退化性
    
- (\omega^n) 给出取向与体积
    
- (\mathbb R^{2n}) 与局部观点的起点  
    

### A4 余切丛 (T^*Q) canonical 结构

- tautological 1-form、(\omega_{\mathrm{can}}=-d\lambda)
    
- 坐标表达与坐标无关定义
    
- 自然性（对底流形微分同胚的函子性）  
    

### A5 辛同胚与辛向量场

- (\mathrm{Symp}(M,\omega)) 与流
- Lie 导数刻画、辛向量场与哈密顿向量场的区分

### A6 (T^*Q) 里的 Lagrangian 子流形

- ( \mathrm{graph}(df)) 与闭 1-形式图像
- exact vs closed 的基本差异
- 典型例子与最基本的判别方式

### A7 Conormal 与 Lagrangian 的几何例子库

- conormal bundle 的构造与 Lagrangian 性
- 用 conormal 组织“约束子流形”的几何信息

### A8 生成函数与辛同胚的构造

- generating functions 方法的基本框架
- 用生成函数构造局部辛同胚
- 典型应用：测地流（作为一条完整算例线） 

### A9 局部理论的工具箱

- isotopy 与向量场
- tubular neighborhood 与同伦算子（homotopy formula）
- 为 Moser 方法做技术准备

### A10 Moser 方法（含相对版本）

- Moser trick 的基本方程与积分构造
- 相对版本（保子流形/保点）  

### A11 达布定理与局部标准形

- 局部坐标下把 (\omega) 化为 (\sum dx_i\wedge dy_i)
- “局部没有曲率不变量”的精确表达

### A12 Weinstein 邻域定理（Lagrangian 版本为主）

- Lagrangian 邻域定理与局部模型
- 由相对 Moser 推出的结构化证明

### A13 Almost complex structures（兼容与驯服）

- (J) 的定义与 (J)-type 分解的最低配置
- compatible / tamed 的线性与整体层面
- ((\omega,J)) 诱导黎曼度量

### A14 Kähler 的最小切片

- Kähler manifold 的定义与基本例子
- 在辛语境下如何理解 Kähler（只保留常用结论与算例）  

### A15 Hamilton 系统与 Poisson 括号

- (X_H) 的定义、Hamilton 流是辛同胚
- Poisson bracket 与李代数结构
- 坐标算例与几何算例

### A16 对称性、moment map 与约化（含 torus 情形的凸性收尾）

- Hamiltonian 群作用与 moment map 的定义与例子
- 辛约化的构造与基本性质
- torus 作用下 moment map 像的凸性定理（作为收口的一个“结构定理”）  

---

## 可选工具讲（2 lectures，可插入，不影响主线）

### T1 Morse 函数与 Morse 引理（只取必要部分）

- Morse lemma、index、典型局部模型
- 让“梯度流轨线空间”成为可用工具  
    （对应 Audin–Damian 的 Morse 主线开端）

### T2 Morse 复形与 Smale 条件

- pseudo-gradient、Smale condition
- 稳/不稳定流形、连接轨线计数、(\partial^2=0) 的结构

当然可以，而且你现在上传的这些资料已经很够用了：经典的 Algebraic Geometry、The Rising Sea、Algebraic Geometry I / Algebraic Geometry II、Algebraic Geometry and Commutative Algebra，再加上 Stacks Project（你说的那样我可以自己查）就能把一套“真能讲”的讲义体系搭起来。你不需要再额外上传什么“必须品”了。下面我先给出**前四个部分**的大纲，每部分 8–9 讲，尽量推进自然且不把后续方向锁死。

---

## Part A 从经典几何到仿射概形与结构层 8 讲

定位：把“点集几何 + 坐标环”的直觉，平滑过渡到 Spec 与结构层，完成概形的对象层面搭建。对应范围在 Algebraic Geometry I 的早期章节与 The Rising Sea 的基础章。

1. **仿射代数几何回顾到“函子化”语言**：仿射代数集、正则函数、Nilpotents 的几何含义，为什么需要“带厚度”的点
2. **Spec 的拓扑**：素理想、Zariski 拓扑、基本开集、不可约与泛点、specialization
3. **局部化与茎**：从 (A_f) 到局部环，点处的“局部数据”如何编码
4. **结构层 (\mathcal O_{\mathrm{Spec} A})**：定义、限制映射、(\mathcal O_X(U)) 的计算套路
5. **局部赋环空间与仿射概形**：((\mathrm{Spec}A,\mathcal O)) 的泛性质，态射与环同态的对应
6. **闭子概形与幂零加厚**：由理想层定义闭嵌入，reduced 化与“同底不同层”
7. **可分解与粘合**：开覆盖粘合仿射概形，得到一般概形；“局部是仿射”的正确用法
8. **概形上的基本几何语言**：不可约分支、约化、整概形、维数的基本性质（先够用即可）

---

## Part B 态射与纤维积 分离与适当 9 讲

定位：把“对象”变成“几何学”，核心是 base change、纤维、分离与适当性，后续几乎所有理论都靠这一套稳定性推进。对应 Algebraic Geometry I 的纤维积与态射性质章节，以及 The Rising Sea 的相关章。

1. **态射第一原则**：态射的局部性、与仿射情形的对照，像与纤维的直观
    
2. **纤维积与基变换**：定义、仿射计算、典型交换图的“正确读法”
    
3. **浸入与子概形的态射版本**：开浸入、闭浸入、局部闭浸入及其刻画
    
4. **有限型与有限表示**：why finite presentation matters，稳定性与例子
    
5. **分离态射**：对角态射刻画，等价条件与常用判别（先把工具装到手里）
    
6. **适当态射**：定义与稳定性，valuative criterion 的使用方式（证明细节可放在讲义里慢慢做）
    
7. **有限态射与整扩张几何**：有限态射、整闭包、规范化的态射视角
    
8. **纤维的维数与上半连续**：纤维维数的基本定理，几何上“维数跳跃”的控制
    
9. **扁平的入门版**：把“族”当主角之前需要的最低配 flatness，给后面 cohomology/base change 做铺垫
    

---

## Part C Proj 与射影几何 拟凝聚层与线丛 除子 9 讲

定位：把射影方法与层论真正合流。你后面想写曲线、曲面、模空间，甚至只想把 Hartshorne II/III 吃透，这一部分都是必经路。对应 Algebraic Geometry I 的拟凝聚层与射影态射，The Rising Sea 的层与除子部分，以及 Algebraic Geometry and Commutative Algebra 对射影与除子的系统处理。

1. **(\mathcal O_X)-模与拟凝聚层**：仿射等价 (\mathrm{QCoh}(\mathrm{Spec}A)\simeq A\text{-Mod})，推拉与局部性
    
2. **凝聚层与有限表示**：noetherian 情形的常用结论，何时需要 noetherian 假设
    
3. **局部自由层与向量丛**：rank、短正合列、张量与对偶
    
4. **Proj 的构造**：齐次素理想、结构层、标准开覆盖与仿射图
    
5. **射影空间与 (\mathcal O(1))**：Serre twist 的基本运算规则，分次模与 Proj 上的拟凝聚层
    
6. **线丛与 Picard 群**：可逆层、等价关系、从局部平凡到全局粘合
    
7. **Cartier 除子与线丛**：principal divisor、线性等价，与 Weil 除子的关系在何时成立
    
8. **射影态射与嵌入**：projective morphism 的等价刻画，与“相对 (\mathcal O(1))”的观点
    
9. **爆破作为 Proj**：Rees 代数与泛性质，作为后续双有理几何的入口（先做最常用结论）
    

---

## Part D 层上同调的可用版本 Čech 与导出函子 8 讲

定位：不做“纯同调代数课”，而是把代数几何里真正会用的同调工具装起来，能算、能推、能用 Serre A/B，顺手把 base change 的门打开一点点。对应 Algebraic Geometry Chapter III 的路线，以及 The Rising Sea 的 Čech 与 base change 章节。

1. **同调的“需求清单”**：长正合列、仿射上消失、函子性与自然性，先把目标说清
    
2. **导出函子式同调**：左正合函子 (\Gamma(X,-)) 的右导出，injective resolution 只讲够用的部分
    
3. **Čech 同调与计算**：Čech 复形、refinement、何时与导出函子同调一致
    
4. **仿射消失与 Leray 型工具**：拟凝聚层在仿射上的高阶同调消失，推导出一堆可算性
    
5. **射影空间上的计算**：(\mathbb P^n) 上 (\mathcal O(d)) 的同调，作为后续一切射影几何的算例母体
    
6. **Serre A 与 B**：生成性与消失性，如何服务于“射影嵌入”和有限生成结论
    
7. **Euler 特征与 Hilbert 多项式的入门版**：只做到能用，不把你锁死到交叉理论
    
8. **同调与基变换的第一眼**：pushforward、fiber cohomology 的关系，给后续“族”的几何直觉打地基
    

---

### 你还需要再上传什么吗

严格来说不用了。若你想让我后面写讲义更贴合你的使用方式，**可选**上传两类东西就会很爽

- 你希望的输出格式模板，比如你更想要 LaTeX 讲义，还是 Hugo Markdown 的讲义风格
    
- 你自己想强调的“后续方向偏好”，比如更偏曲线曲面与双有理几何，还是更偏模空间与形变论
    

如果你点头，我们就从 **Part A 第 1 讲**开始写成“可直接拿去讲”的正文版本。你只要告诉我输出用 LaTeX 还是 Hugo Markdown 就行。