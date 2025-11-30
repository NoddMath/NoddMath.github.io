+++
date = "2023-12-28T15:44:10-04:00"
draft = false
title = "Tangent Structure"
categories = "Math"
ShowToc = true
tags = [ "Differential Geometry" ]
+++

> [!info] Derivation on a manifold
> Given a smooth manifold $M$, a **derivation** at a point $p\in M$ is a linear map $D:C^\infty(M)\to \mathbb{R}$ satisfying the Leibniz rule: $D(fg)=f(p)D(g)+g(p)D(f)$ for all $f,g\in C^\infty(M)$.  

> [!info] Tangent space
> Given a smooth manifold $M$, the **tangent space** at a point $p\in M$, denoted by $T_pM$, is the vector space consisting of all derivations at $p$.

> [!info] Tangent bundle
> The **tangent bundle** of a smooth manifold $M$ is the disjoint union of the tangent spaces at all points of $M$, that is, $TM=\bigsqcup_{p\in M} T_pM$.

> [!danger] Remark
> Each element of $TM$ is a pair $(p,v)$, where $p\in M$ and $v\in T_pM$. There is a natural projection $\pi:TM\to M$ given by $\pi(p,v)=p$.

> [!info] Differential of a smooth map
> Let $f:M\to N$ be a smooth map between smooth manifolds. The differential of $f$ at a point $p\in M$ is the linear map $df_p:T_pM\to T_{f(p)}N$, defined by $(df_p(v))(g)=v(g\circ f)$ for all $v\in T_pM$ and $g\in C^\infty(N)$.

> [!danger] Remark
> In many sources, the differential of a smooth map is also referred to as the **pushforward**. Later, we will encounter another related map, the pullback.

If $M$ and $N$ are Euclidean spaces, the differential between them is the Jacobian matrix acting on tangent vectors.

> [!info] Immersion & Submersion
> Let $f:M\to N$ be a smooth map between smooth manifolds.
> -  $f$ is called an **immersion** if the differential $df_p:T_pM\to T_{f(p)}N$ is injective for all $p\in M$.
> - $f$ is called a **submersion** if the differential $df_p:T_pM\to T_{f(p)}N$ is surjective for all $p\in M$.

> [!info] Smooth embedding
> A smooth map $f:M\to N$ between smooth manifolds is called a **smooth embedding** if it is both an immersion and a {{< tooltip "A continuous map $f:M\to N$ between topological spaces is called a topological embedding if $f$ is a homeomorphism onto its image $f(M)\subseteq N$." >}} topological embedding {{< /tooltip >}}.

> [!info] Submanifold
> Given an $n$-dimensional smooth manifold $M$, a subset $S\subset M$ is called a $k$-dimensional smooth **submanifold** if for every point $p\in S$, there exists a chart $(U,\varphi)$ of $M$ around $p$ with $\varphi:U\to \mathbb{R}^n$, such that  
> $$\varphi(U\cap S)=\{(x_1,\dots,x_n)\in \varphi(U)\mid x_{k+1}=\cdots=x_n=0\}.$$

