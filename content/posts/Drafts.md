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