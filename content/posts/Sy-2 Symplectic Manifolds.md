+++
date = "2025-01-03T15:44:10-04:00"
draft = false
title = "Symplectic Manifolds"
categories = "Math"
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

Throughout this chapter all manifolds are smooth and finite dimensional, and all differential forms are smooth.

## 2.1 Symplectic 2-forms and symplectic manifolds

We now globalize the linear notion of a symplectic form from Chapter 1.

> [!info] Definition (differential 2-form)
> Let $M$ be a smooth manifold. A **differential 2-form** on $M$ is a smooth section
> $$\omega \in \Omega^2(M),$$
> i.e. a smooth assignment of a skew-symmetric bilinear form
> $$\omega_p : T_pM \times T_pM \to \mathbb{R}$$
> at each point $p\in M$, varying smoothly with $p$.

We use the exterior derivative $d:\Omega^k(M)\to \Omega^{k+1}(M)$ and wedge product $\wedge$ in the usual sense.

> [!info] Definition (closed and nondegenerate)
> Let $\omega\in\Omega^2(M)$.
> - $\omega$ is **closed** if $d\omega = 0$.
> - $\omega$ is **nondegenerate** if for every $p\in M$ the bilinear form
>   $\omega_p$ on $T_pM$ is nondegenerate, i.e.
>   $$\omega_p(v,\cdot)=0 \ \Longrightarrow\ v=0 \quad \text{for all } v\in T_pM.$$

> [!info] Definition (symplectic form and symplectic manifold)
> A **symplectic form** on a manifold $M$ is a 2-form $\omega\in\Omega^2(M)$ that is closed and nondegenerate.
> A **symplectic manifold** is a pair $(M,\omega)$ where $M$ is a manifold and $\omega$ is a symplectic form.

Nondegeneracy immediately forces the dimension to be even.

> [!abstract] Proposition 2.1 (Even-dimensionality)
> If $(M,\omega)$ is a symplectic manifold, then $\dim M = 2n$ for some $n\in\mathbb{N}$.

> [!success] Proof
> At each $p\in M$, the bilinear form $\omega_p$ on the real vector space $T_pM$ is skew-symmetric and nondegenerate. By the linear theory of Chapter 1, any such form exists only on an even-dimensional space. Hence $\dim T_pM$ is even for every $p$, so $\dim M$ is even. $\square$

The top exterior power of $\omega$ gives a canonical orientation and volume form.

> [!abstract] Proposition 2.2 (Orientation and volume form)
> Let $(M^{2n},\omega)$ be symplectic. Then:
> 1. $\omega^n := \omega\wedge\cdots\wedge \omega \in \Omega^{2n}(M)$ is nowhere vanishing;
> 2. $\omega^n$ defines a canonical orientation on $M$;
> 3. symplectomorphisms preserve $\omega^n$.

> [!success] Proof
> At each point $p\in M$, $\omega_p$ is a nondegenerate skew-symmetric form on the $2n$-dimensional vector space $T_pM$. In a Darboux basis $\{e_1,\dots,e_n,f_1,\dots,f_n\}$ of $T_pM$ we have
> $$\omega_p = \sum_{i=1}^n e^i \wedge f^i$$
> and hence
> $$\omega_p^n = n! \, e^1\wedge f^1\wedge\cdots\wedge e^n\wedge f^n.$$
> This is a nonzero element of $\Lambda^{2n}T_p^*M$, so $\omega^n$ never vanishes. This defines an orientation by declaring $(e_1,f_1,\dots,e_n,f_n)$ to be positively oriented.  
> If $\varphi:(M,\omega)\to (M,\omega)$ is a symplectomorphism, then $\varphi^*\omega = \omega$ and hence
> $\varphi^*(\omega^n) = (\varphi^*\omega)^n = \omega^n$, so $\varphi$ preserves the oriented volume form. $\square$

> [!danger] Remark 2.3
> Every symplectic manifold is oriented and comes with a natural volume form, but the symplectic structure carries much more information: many distinct symplectic forms can determine the same volume form.

---

## 2.2 Symplectomorphisms and basic constructions

We formalize the notion of map preserving a symplectic structure.

> [!info] Definition (symplectomorphism)
> Let $(M_1,\omega_1)$, $(M_2,\omega_2)$ be symplectic manifolds of the same dimension $2n$. A diffeomorphism
> $$\varphi : M_1 \to M_2$$
> is a **symplectomorphism** if
> $$\varphi^*\omega_2 = \omega_1.$$
> In particular, a diffeomorphism $\varphi:M\to M$ is a symplectomorphism if it preserves $\omega$.

The group of all symplectomorphisms of $(M,\omega)$ is denoted $\mathrm{Symp}(M,\omega)$.

> [!abstract] Proposition 2.4 (Basic properties)
> Let $(M,\omega)$ be symplectic.
> 1. The identity map $\mathrm{id}_M$ is a symplectomorphism.
> 2. The composition of symplectomorphisms is a symplectomorphism.
> 3. The inverse of a symplectomorphism is a symplectomorphism.
> Therefore, $\mathrm{Symp}(M,\omega)$ is a subgroup of $\mathrm{Diff}(M)$.

> [!success] Proof
> (1) Trivial.  
> (2) If $\varphi,\psi$ are symplectomorphisms, then
> $$(\psi\circ\varphi)^*\omega = \varphi^*(\psi^*\omega) = \varphi^*\omega = \omega.$$
> (3) If $\varphi^*\omega = \omega$ then
> $$\omega = \varphi^*\omega \Longrightarrow (\varphi^{-1})^*\omega = \omega$$
> by applying $(\varphi^{-1})^*$ to both sides. $\square$

Two simple but important constructions produce new symplectic manifolds from old ones.

> [!abstract] Proposition 2.5 (Product symplectic manifolds)
> If $(M_1,\omega_1)$ and $(M_2,\omega_2)$ are symplectic, then
> $$(M_1\times M_2,\ \omega_1\oplus\omega_2)$$
> is symplectic, where
> $$\omega_1\oplus\omega_2 := \pi_1^*\omega_1 + \pi_2^*\omega_2,$$
> and $\pi_i:M_1\times M_2\to M_i$ are the projections.

> [!success] Proof
> Closedness is immediate since $d$ commutes with pullback:
> $$d(\omega_1\oplus\omega_2) = \pi_1^*(d\omega_1) + \pi_2^*(d\omega_2) = 0.$$
> For nondegeneracy, fix $(p,q)\in M_1\times M_2$ and let $v=(v_1,v_2)\in T_{(p,q)}(M_1\times M_2)$ satisfy
> $$(\omega_1\oplus\omega_2)_{(p,q)}(v,\cdot)=0.$$
> Taking $(0,w_2)$ as test vectors gives $\omega_2(v_2,w_2)=0$ for all $w_2$, so $v_2=0$; similarly, using $(w_1,0)$ gives $v_1=0$. Thus $v=0$, so $\omega_1\oplus\omega_2$ is nondegenerate. $\square$

> [!abstract] Proposition 2.6 (Restriction to open subsets)
> Let $(M,\omega)$ be symplectic and $U\subset M$ an open subset. Then $(U,\omega|_U)$ is symplectic, and every symplectomorphism of $(U,\omega|_U)$ is the restriction of a local symplectomorphism of $(M,\omega)$.

> [!success] Proof
> Closedness and nondegeneracy are clearly preserved under restriction. The last statement is immediate: any diffeomorphism $\varphi:U\to U'\subset M$ with $\varphi^*\omega|_{U'}=\omega|_U$ is a local symplectomorphism of $(M,\omega)$. $\square$

## 2.3 Basic examples

We now collect a number of standard examples, most of which will reappear repeatedly later.

> [!example] Example 2.7 (The standard symplectic space $\mathbb{R}^{2n}$)
> On $\mathbb{R}^{2n}$ with coordinates $(x_1,\dots,x_n,y_1,\dots,y_n)$, define
> $$\omega_0 := \sum_{i=1}^n dx_i \wedge dy_i.$$
> Then $d\omega_0 = 0$ (since the coefficients are constant) and at each point, $\omega_0$ corresponds to the standard nondegenerate skew-symmetric form discussed in Chapter 1. Hence $(\mathbb{R}^{2n},\omega_0)$ is symplectic.

> [!example] Example 2.8 ($\mathbb{C}^n$ with its standard form)
> Identify $\mathbb{C}^n$ with $\mathbb{R}^{2n}$ via $z_k = x_k + \mathrm{i} y_k$. The standard Hermitian inner product
> $$\langle z,w\rangle = \sum_{k=1}^n z_k \overline{w_k}$$
> has imaginary part
> $$\omega_0(v,w) = \mathrm{Im}\,\langle v,w\rangle.$$
> Explicitly,
> $$\omega_0 = \frac{\mathrm{i}}{2} \sum_{k=1}^n dz_k \wedge d\overline{z_k} = \sum_{k=1}^n dx_k \wedge dy_k.$$
> Thus the standard complex structure, Euclidean metric, and this 2-form form a compatible triple as in Chapter 1.

> [!example] Example 2.9 (Area forms on oriented surfaces)
> Let $\Sigma$ be an oriented 2-dimensional manifold. A 2-form $\omega\in\Omega^2(\Sigma)$ is determined by a function $f$, locally $\omega = f\,dx\wedge dy$, in any oriented coordinate chart $(x,y)$. Since every 3-form on a 2-manifold vanishes, $d\omega=0$ automatically.  
> If $\omega$ is nowhere vanishing (equivalently, $f(p)\neq 0$ for all $p$), then $\omega$ is nondegenerate. Hence any area form on an oriented surface is symplectic, and conversely every symplectic form on a surface is an area form.

> [!example] Example 2.10 ($S^2$ with the standard area form)
> View $S^2 \subset \mathbb{R}^3$ as the unit sphere. For $p\in S^2$, the tangent space $T_pS^2$ can be identified with the orthogonal complement $p^\perp\subset\mathbb{R}^3$. Define
> $$\omega_p(u,v) := \langle p, u\times v\rangle, \quad u,v\in T_pS^2.$$
> This is skew-symmetric and nondegenerate: if $u\neq 0$, one can choose $v=u\times p$ to get $\omega_p(u,v)\neq 0$. Since $\dim S^2 = 2$, the form is automatically closed. Thus $(S^2,\omega)$ is symplectic.

> [!example] Example 2.11 (Product examples)
> Let $(\Sigma_1,\omega_1)$, $(\Sigma_2,\omega_2)$ be symplectic surfaces (for example, $S^2$ or $T^2$ with area forms). Then
> $$(\Sigma_1\times \Sigma_2,\ \pi_1^*\omega_1 + \pi_2^*\omega_2)$$
> is a 4-dimensional symplectic manifold, by Proposition 2.5.

A more sophisticated example comes from complex geometry; we only mention it briefly here and will revisit it later.

> [!example] Example 2.12 ($\mathbb{CP}^n$ with Fubini–Study form)
> Complex projective space $\mathbb{CP}^n$ carries a natural Kähler form $\omega_{\mathrm{FS}}$, the **Fubini–Study form**, constructed from the standard Hermitian metric on $\mathbb{C}^{n+1}$. It is a closed, positive (1,1)-form and hence symplectic. We will return to this construction in a later chapter on Kähler geometry.

---

## 2.4 The cotangent bundle as a manifold

The cotangent bundle is the fundamental example in symplectic geometry. We first recall its manifold structure.

Let $X$ be an $n$-dimensional manifold and $T^*X$ its cotangent bundle:
$$
  T^*X := \bigsqcup_{x\in X} T^*_xX,
$$
with projection $\pi:T^*X\to X$, $\pi(x,\xi)=x$.

> [!abstract] Proposition 2.13 (Local coordinates on $T^*X$)
> Let $(U, x^1,\dots,x^n)$ be a coordinate chart on $X$. For each $x\in U$, any $\xi\in T_x^*X$ can be written uniquely as
> $$\xi = \sum_{i=1}^n \xi_i (dx^i)_x$$
> for some $\xi_1,\dots,\xi_n\in\mathbb{R}$. This gives a coordinate chart
> $$T^*U \to \mathbb{R}^{2n},\quad (x,\xi) \mapsto (x^1,\dots,x^n,\xi_1,\dots,\xi_n),$$
> and these charts make $T^*X$ into a smooth manifold of dimension $2n$.

> [!success] Proof
> The existence and uniqueness of the representation
> $\xi=\sum \xi_i(dx^i)_x$ follow because $(dx^1)_x,\dots,(dx^n)_x$ form a basis of $T_x^*X$. On overlaps of charts, the coordinate transition maps are smooth since the change of basis matrix $\frac{\partial x^i}{\partial x'^j}$ is smooth and the corresponding change in components $\xi_i$ is linear in these derivatives. Hence the charts fit together to define a smooth structure on $T^*X$.

In these coordinates, we write $(x^1,\dots,x^n,\xi_1,\dots,\xi_n)$ as **cotangent coordinates** associated to the base coordinates $(x^1,\dots,x^n)$.

---

## 2.5 The tautological 1-form and the canonical symplectic form

We now introduce the fundamental 1-form and 2-form on $T^*X$.

### 2.5.1 Coordinate expressions

Let $(U,x^1,\dots,x^n)$ be a coordinate chart on $X$ and $(x^1,\dots,x^n,\xi_1,\dots,\xi_n)$ the associated coordinates on $T^*U$.

> [!info] Definition (tautological 1-form and canonical 2-form in coordinates)
> On $T^*U\subset T^*X$, define
> $$\lambda := \sum_{i=1}^n \xi_i\, dx^i \in \Omega^1(T^*U),$$
> and
> $$\omega_{\mathrm{can}} := -d\lambda = \sum_{i=1}^n dx^i \wedge d\xi_i \in \Omega^2(T^*U).$$

> [!abstract] Proposition 2.14 (Coordinate independence)
> The 1-form $\lambda$ and the 2-form $\omega_{\mathrm{can}}=-d\lambda$ patch together to give globally defined forms on $T^*X$, independent of the choice of coordinates on $X$.

> [!success] Proof
> Let $(x^i)$ and $(x'^j)$ be two coordinate systems on $U\subset X$ with associated cotangent coordinates $(x^i,\xi_i)$, $(x'^j,\xi'_j)$ on $T^*U$. One checks that
> $$\xi'_j = \sum_i \xi_i \frac{\partial x^i}{\partial x'^j},\quad dx'^j = \sum_i \frac{\partial x'^j}{\partial x^i} dx^i.$$
> Then
> $$\sum_j \xi'_j dx'^j = \sum_{i,j} \xi_i \frac{\partial x^i}{\partial x'^j} \frac{\partial x'^j}{\partial x^k} dx^k = \sum_i \xi_i dx^i,$$
> using the chain rule. Hence $\lambda$ has the same expression in both coordinate systems, so it is intrinsically defined. Since $\omega_{\mathrm{can}} = -d\lambda$, it is also intrinsic.

> [!info] Terminology
> The 1-form $\lambda$ is called the **tautological 1-form** or **Liouville form** on $T^*X$.  
> The 2-form $\omega_{\mathrm{can}} = -d\lambda$ is the **canonical symplectic form** on $T^*X$.

### 2.5.2 Coordinate-free definition

The coordinate-free description of $\lambda$ is very simple.

Let $\pi:T^*X \to X$ be the projection. A point of $T^*X$ is a pair $(x,\xi)$ with $\xi\in T^*_xX$. A tangent vector $v\in T_{(x,\xi)}T^*X$ projects to a vector $d\pi(v)\in T_xX$.

> [!info] Definition (coordinate-free tautological form)
> The **tautological 1-form** $\lambda\in\Omega^1(T^*X)$ is defined by
> $$\lambda_{(x,\xi)}(v) := \xi\bigl(d\pi_{(x,\xi)}(v)\bigr), \quad (x,\xi)\in T^*X,\ v\in T_{(x,\xi)}T^*X.$$
> The **canonical symplectic form** is
> $$\omega_{\mathrm{can}} := -d\lambda.$$

One checks that this definition agrees with the coordinate expression above.

### 2.5.3 Nondegeneracy of the canonical symplectic form

> [!note] Theorem 2.15 ($\omega_{\mathrm{can}}$ is symplectic)
> For any manifold $X$, the canonical 2-form $\omega_{\mathrm{can}}=-d\lambda$ on $T^*X$ is a symplectic form. Thus $(T^*X,\omega_{\mathrm{can}})$ is a symplectic manifold.

> [!success] Proof
> We already know that $\omega_{\mathrm{can}} = -d\lambda$ is exact, hence closed. It remains to show nondegeneracy. This is a pointwise linear statement, so fix $(x,\xi)\in T^*X$. In local coordinates $(x^1,\dots,x^n,\xi_1,\dots,\xi_n)$ around $(x,\xi)$, we have
> $$\omega_{\mathrm{can}} = \sum_{i=1}^n dx^i \wedge d\xi_i,$$
> which is the standard symplectic form on $\mathbb{R}^{2n}$. Its nondegeneracy was verified in Chapter 1. Therefore $\omega_{\mathrm{can}}$ is nondegenerate at each point, and hence symplectic.

> [!danger] Remark 2.16
> The manifold $T^*X$ with $\omega_{\mathrm{can}}$ is the model symplectic manifold. Many local and semi-local results in symplectic topology reduce neighborhoods in a general symplectic manifold to neighborhoods in a cotangent bundle via appropriate symplectomorphisms.

---

## 2.6 Graphs of 1-forms and Lagrangian submanifolds in $T^*X$

We now see how the canonical structure of $T^*X$ naturally produces Lagrangian submanifolds. This is a local version of results that later lead into Lagrangian embedding theory and Weinstein’s neighborhood theorem.

Let $(T^*X,\omega_{\mathrm{can}})$ be as above. Recall from Chapter 1 that for a symplectic vector space $(V,\omega)$, a subspace $L\subset V$ is Lagrangian if it is $n$-dimensional and $\omega|_L\equiv 0$. This generalizes to submanifolds.

> [!info] Definition (Lagrangian submanifold in a symplectic manifold)
> Let $(M^{2n},\omega)$ be symplectic. A submanifold $L\subset M$ is **Lagrangian** if:
> - $\dim L = n$;
> - $i^*\omega = 0$, where $i:L\hookrightarrow M$ is the inclusion.

In the special case $M=T^*X$, there are many natural Lagrangian submanifolds.

> [!example] Example 2.17 (The zero section)
> The **zero section** $X\hookrightarrow T^*X$, sending $x\mapsto (x,0)$, is a Lagrangian submanifold. Indeed, the differential $di:T_xX\to T_{(x,0)}T^*X$ identifies $T_xX$ with the horizontal subspace spanned by $\partial/\partial x^i$ in coordinates. Restricted to this subspace,
> $$\omega_{\mathrm{can}} = \sum dx^i\wedge d\xi_i$$
> vanishes because all vectors have $\xi$-components zero. The zero section has dimension $\dim X = n = \tfrac12\dim T^*X$, so it is Lagrangian.

A more flexible construction uses graphs of 1-forms.

> [!info] Definition (Graphs of 1-forms)
> Let $\alpha\in\Omega^1(X)$ be a 1-form. The **graph** of $\alpha$ is the submanifold
> $$\Gamma_\alpha := \{(x,\alpha_x) \mid x\in X\} \subset T^*X.$$

> [!abstract] Proposition 2.18 (Graphs of closed 1-forms are Lagrangian)
> Let $\alpha\in\Omega^1(X)$. Then:
> 1. $\Gamma_\alpha$ has dimension $\dim X$ and is diffeomorphic to $X$;
> 2. $\Gamma_\alpha$ is Lagrangian in $(T^*X,\omega_{\mathrm{can}})$ if and only if $d\alpha = 0$;
> 3. In particular, if $\alpha = df$ is an exact 1-form, then $\Gamma_{df}$ is a Lagrangian submanifold.

> [!success] Proof
> (1) The map
> $$F_\alpha : X \to T^*X,\quad F_\alpha(x) = (x,\alpha_x)$$
> is an embedding, hence $\Gamma_\alpha = F_\alpha(X)$ is a copy of $X$ inside $T^*X$ and $\dim \Gamma_\alpha = \dim X$.
> 
> (2) Since the tautological form satisfies
> $$\lambda_{(x,\xi)}(v) = \xi\bigl(d\pi(v)\bigr),$$
> we have
> $$(F_\alpha^*\lambda)_x (v) = \lambda_{F_\alpha(x)}(dF_\alpha(v)) = \lambda_{(x,\alpha_x)}(dF_\alpha(v)) = \alpha_x(d\pi(dF_\alpha(v))).$$
> But $\pi\circ F_\alpha = \mathrm{id}_X$, hence $d\pi\circ dF_\alpha = \mathrm{id}_{T_xX}$, and so this equals $\alpha_x(v)$. Thus
> $$F_\alpha^*\lambda = \alpha.$$
> Therefore,
> $$F_\alpha^*\omega_{\mathrm{can}} = F_\alpha^*(-d\lambda) = -d(F_\alpha^*\lambda) = -d\alpha.$$
> Hence $F_\alpha^*\omega_{\mathrm{can}}=0$ if and only if $d\alpha=0$. This means that $\omega_{\mathrm{can}}$ restricts to zero on $\Gamma_\alpha$ exactly when $\alpha$ is closed.  
> 
> (3) If $\alpha=df$, then $d\alpha = d^2f = 0$, so $\Gamma_{df}$ is Lagrangian. $\square$

> [!danger] Remark 2.19
> The last proposition is the local model behind generating functions in symplectic geometry: a Lagrangian submanifold that is the graph of $df$ can be “generated” by the function $f$. This idea plays an important role in many parts of classical mechanics and symplectic topology.

## 2.7 Exact symplectic manifolds and Liouville vector fields

The cotangent bundle example suggests a more general notion.

> [!info] Definition (exact symplectic manifold)
> A symplectic manifold $(M,\omega)$ is **exact symplectic** if $\omega$ is exact as a differential form, i.e. there exists a 1-form $\lambda\in\Omega^1(M)$ such that
> $$\omega = d\lambda.$$
> Such a $\lambda$ is called a **primitive** of $\omega$.

For $(T^*X,\omega_{\mathrm{can}})$ we have $\omega_{\mathrm{can}} = -d\lambda$, so this is the fundamental example of an exact symplectic manifold.

> [!info] Definition (Liouville vector field)
> Let $(M,\omega=d\lambda)$ be exact symplectic. A vector field $Z$ on $M$ is a **Liouville vector field** for $\omega$ if
> $$\iota_Z\omega = \lambda.$$

> [!abstract] Proposition 2.20 (Liouville vector fields expand $\omega$)
> Let $(M,\omega=d\lambda)$ be exact symplectic and $Z$ a Liouville vector field. Then
> $$\mathcal{L}_Z\omega = \omega.$$

> [!success] Proof
> Using Cartan’s formula and the fact that $\omega=d\lambda$ is closed,
> $$\mathcal{L}_Z\omega = d(\iota_Z\omega) + \iota_Z(d\omega) = d\lambda + \iota_Z(0) = d\lambda = \omega.$$
> Thus the flow of $Z$ dilates the symplectic form exponentially. $\square$

> [!danger] Remark 2.21
> In many situations, one is interested in symplectic manifolds that look like the completion of a compact manifold with boundary, where a Liouville vector field is transverse to the boundary; these are called **Liouville domains** and **Liouville manifolds**. Cotangent bundles of compact manifolds provide basic examples.

A simple but important consequence of exactness is the nonexistence of compact exact symplectic manifolds without boundary.

> [!abstract] Proposition 2.22 (No compact exact symplectic manifolds without boundary)
> Let $(M^{2n},\omega)$ be a compact symplectic manifold without boundary. Then $\omega$ cannot be exact.

> [!success] Proof
> Suppose $\omega = d\lambda$. Then
> $$\omega^n = d(\lambda\wedge\omega^{n-1})$$
> because
> $$d(\lambda\wedge\omega^{n-1}) = d\lambda\wedge\omega^{n-1} + \lambda\wedge d(\omega^{n-1}) = \omega\wedge\omega^{n-1} + \lambda\wedge 0 = \omega^n,$$
> using $d\omega=0$. Integrating over $M$ and applying Stokes’ theorem gives
> $$\int_M \omega^n = \int_M d(\lambda\wedge\omega^{n-1}) = \int_{\partial M} \lambda\wedge\omega^{n-1} = 0,$$
> because $\partial M = \varnothing$. However, $\omega^n$ is a volume form, so $\int_M \omega^n > 0$, a contradiction. Hence $\omega$ is not exact. $\square$

> [!danger] Remark 2.23
> This simple observation already shows that symplectic topology is subtle: the property of being exact is a genuine global constraint. For instance, closed surfaces of genus $g\ge 1$ admit symplectic (area) forms but none of them is exact.

At this point we have:

- the global notion of a symplectic manifold and symplectomorphism;
- a rich collection of basic examples, including $(\mathbb{R}^{2n},\omega_0)$, surfaces, $\mathbb{C}^n$, and $(T^*X,\omega_{\mathrm{can}})$;
- concrete constructions of Lagrangian submanifolds in $T^*X$ via graphs of closed 1-forms;
- and the beginning of the theory of exact symplectic manifolds and Liouville fields.

In the next chapter we will develop the local theory: Moser’s method, Darboux’s theorem, and the systematic study of symplectic and Lagrangian submanifolds inside a symplectic manifold.
