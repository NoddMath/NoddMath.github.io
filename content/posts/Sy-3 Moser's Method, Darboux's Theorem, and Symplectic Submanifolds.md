+++
date = "2025-01-11T15:44:10-04:00"
draft = false
title = "Moser's Method, Darboux's Theorem, and Symplectic Submanifolds"
categories = "Math"
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

Throughout, $(M,\omega)$ is a symplectic manifold of dimension $2n$.

## 3.1 Isotopies and Moser's method

We first formalize isotopies and time-dependent vector fields.

> [!info] Definition (isotopy of diffeomorphisms)
> Let $M$ be a manifold. An **isotopy of diffeomorphisms**
> $$\rho_t : M \to M,\quad t\in[0,1],$$
> is a smooth map $\rho : M\times[0,1]\to M$ such that for each $t$, $\rho_t$ is a diffeomorphism and $\rho_0 = \mathrm{id}_M$.

A smooth time-dependent vector field is a family $(X_t)_{t\in[0,1]}$ with $X_t\in\mathfrak{X}(M)$ depending smoothly on $t$. Given $X_t$, its flow $\rho_t$ solves
$$\frac{d}{dt}\rho_t(p)=X_t(\rho_t(p)),\quad \rho_0(p)=p.$$

> [!abstract] Proposition 3.1 (Isotopies and time-dependent vector fields)
> Let $(\rho_t)_{t\in[0,1]}$ be an isotopy. Define
> $$X_t := \left(\frac{d}{dt}\rho_t\right)\circ\rho_t^{-1}.$$
> Then $X_t$ is a smooth time-dependent vector field on $M$, and $\rho_t$ is the flow of $X_t$. Conversely, given a smooth time-dependent vector field $X_t$ whose flow exists for all $t\in[0,1]$, that flow is an isotopy.

> [!success] Proof (sketch)
> Differentiating the identity $\rho_t\circ\rho_t^{-1} = \mathrm{id}$ in $t$ gives the relation between $\rho_t$ and $X_t$, and standard ODE theory on manifolds gives existence and uniqueness of flows.

Next, we recall Cartan's formula for Lie derivatives of differential forms.

> [!abstract] Proposition 3.2 (Cartan's magic formula)
> Let $X\in\mathfrak{X}(M)$ and $\alpha\in\Omega^k(M)$. Then
> $$\mathcal{L}_X\alpha = d(\iota_X\alpha)+\iota_X(d\alpha),$$
> where $\iota_X$ is interior product.

This is the analytic backbone of Moser's method.

### 3.1.1 Notions of equivalence of symplectic structures

Let $M$ be a fixed $2n$-manifold with two symplectic forms $\omega_0$, $\omega_1$.

> [!info] Definition (equivalence notions)
> We say that:
> - $(M,\omega_0)$ and $(M,\omega_1)$ are **symplectomorphic** if there exists a diffeomorphism $\varphi:M\to M$ such that $\varphi^*\omega_1=\omega_0$.
> - They are **strongly isotopic** if there exists an isotopy $\rho_t:M\to M$ with $\rho_0=\mathrm{id}$ and $\rho_1^*\omega_1=\omega_0$.
> - They are **deformation equivalent** if there is a smooth family $\omega_t$ of symplectic forms joining $\omega_0$ to $\omega_1$.
> - They are **isotopic** if there is a deformation $\omega_t$ with $[\omega_t]\in H^2(M;\mathbb{R})$ independent of $t$.

> [!abstract] Proposition 3.3
> We have
> $$\text{strongly isotopic} \implies \text{symplectomorphic},$$
> and
> $$\text{strongly isotopic} \implies \text{isotopic} \implies \text{deformation equivalent}.$$

> [!success] Proof
> If $\rho_t$ is an isotopy with $\rho_1^*\omega_1=\omega_0$, then $\rho_1$ is a symplectomorphism, proving the first implication.  
> For the second, set $\omega_t := \rho_t^*\omega_1$. Then each $\omega_t$ is symplectic, $\omega_0=\rho_0^*\omega_1$, $\omega_1=\rho_1^*\omega_1$, and $[\omega_t]=[\omega_1]$ by homotopy invariance of de Rham cohomology.

Moser's theorem shows, on a closed manifold, that the implication “isotopic $\Rightarrow$ strongly isotopic'' holds under a natural hypothesis.

### 3.1.2 Moser's equation and the basic trick

Let $\omega_t$ be a smooth family of symplectic forms on a manifold $M$. We seek an isotopy $\rho_t$ such that
$$\rho_t^*\omega_t=\omega_0\quad \text{for all } t\in[0,1].$$

Differentiate this in $t$:
$$0=\frac{d}{dt}(\rho_t^*\omega_t)=\rho_t^*(\dot{\omega}_t+\mathcal{L}_{X_t}\omega_t),$$
where $X_t$ is the time-dependent vector field generating $\rho_t$. Using Cartan's formula and $d\omega_t=0$,
$$
  \mathcal{L}_{X_t}\omega_t
  = d(\iota_{X_t}\omega_t) + \iota_{X_t}(d\omega_t)
  = d(\iota_{X_t}\omega_t).
$$
Thus the condition becomes
$$
  \dot{\omega}_t + d(\iota_{X_t}\omega_t) = 0.
$$

If we can write
$$
  \dot{\omega}_t = d\sigma_t
$$
for some smoothly varying 1-forms $\sigma_t$, then the Moser equation
$$
  \iota_{X_t}\omega_t = -\sigma_t
$$
has a unique solution $X_t$ at each time because $\omega_t$ is nondegenerate. Integrating $X_t$ gives an isotopy $\rho_t$ with $\rho_t^*\omega_t$ constant in $t$.

This is the **Moser's trick**.

### 3.1.3 Moser stability on closed manifolds

> [!note] Theorem 3.4 (Moser stability)
> Let $M$ be a closed (compact without boundary) manifold and $\omega_t$, $t\in[0,1]$, a smooth family of symplectic forms on $M$ such that
> $$[\omega_t] = [\omega_0] \in H^2(M;\mathbb{R}) \quad\text{for all }t.$$
> Then there exists an isotopy $\rho_t:M\to M$ with $\rho_0=\mathrm{id}$ and
> $$\rho_t^*\omega_t = \omega_0\quad\text{for all }t.$$
> In particular, $\rho_1$ is a symplectomorphism $(M,\omega_1)\to(M,\omega_0)$.

> [!success] Proof
> Since $[\omega_t]$ is constant in $t$, for each $t$ we can find a 1-form $\sigma_t$ such that
> $$\dot{\omega}_t = d\sigma_t.$$
> Choose $\sigma_t$ smoothly in $t$ (for instance by Hodge theory or any continuous splitting of $d$).  
> 
> For each $t$, define $X_t$ by solving the linear equation
> $$\iota_{X_t}\omega_t = -\sigma_t.$$
> Since $\omega_t$ is nondegenerate this determines $X_t$ uniquely and smoothly.  
> 
> Let $\rho_t$ be the flow of $X_t$ with $\rho_0=\mathrm{id}$. Because $M$ is compact and $X_t$ is smooth, the flow exists for all $t\in[0,1]$. Then
> $$\frac{d}{dt}(\rho_t^*\omega_t) = \rho_t^*(\dot{\omega}_t + \mathcal{L}_{X_t}\omega_t) = \rho_t^*\bigl(d\sigma_t + d(\iota_{X_t}\omega_t)\bigr) = \rho_t^*\bigl(d\sigma_t - d\sigma_t\bigr) = 0.$$
> Thus $\rho_t^*\omega_t$ is independent of $t$ and equals $\rho_0^*\omega_0=\omega_0$. Taking $t=1$ gives $\rho_1^*\omega_1=\omega_0$.

### 3.1.4 Relative Moser theorem (local version)

For local applications such as Darboux's theorem, we need a version relative to a submanifold.

> [!note] Theorem 3.5 (Relative Moser theorem)
> Let $M$ be a manifold, $X\subset M$ a compact submanifold, and $\omega_0,\omega_1$ symplectic forms on $M$ such that
> $$\omega_0|_X = \omega_1|_X.$$
> Then there exist neighborhoods $U_0,U_1$ of $X$ in $M$ and a diffeomorphism
> $$\varphi : U_0 \to U_1$$
> such that
> $$\varphi|_X = \mathrm{id}_X,\qquad \varphi^*\omega_1 = \omega_0 \text{ on }U_0.$$

> [!success] Proof (sketch)
> Choose a tubular neighborhood $U_0$ of $X$ and let $\eta := \omega_1-\omega_0$ on $U_0$. Then $\eta$ is closed and $\eta|_X=0$. Using the homotopy operator associated to the deformation retraction of $U_0$ onto $X$, one constructs a 1-form $\mu$ on $U_0$ with
> $$\eta = d\mu,\quad \mu|_X=0.$$
> Consider the family $\omega_t := \omega_0 + t\,d\mu$ on a slightly smaller neighborhood; for $U_0$ small enough each $\omega_t$ is symplectic. Solve
> $$\iota_{v_t}\omega_t = -\mu$$
> for a time-dependent vector field $v_t$; then $v_t|_X=0$. Integrating $v_t$ gives an isotopy $\rho_t$ defined near $X$, fixing $X$ pointwise and satisfying $\rho_t^*\omega_t=\omega_0$. Setting $\varphi:=\rho_1$ and $U_1:=\varphi(U_0)$ yields the claim.

The special case $X=\{p\}$ will immediately give Darboux's theorem.

## 3.2 Darboux's theorem and local normal forms

Darboux's theorem is the fundamental local result in symplectic geometry: **all symplectic manifolds are locally isomorphic to $(\mathbb{R}^{2n},\omega_0)$.**

### 3.2.1 Statement and proof

> [!note] Theorem 3.6 (Darboux)
> Let $(M,\omega)$ be a symplectic manifold and $p\in M$. Then there exists a coordinate chart
> $$(U,x^1,\dots,x^n,y^1,\dots,y^n)$$
> centered at $p$ such that
> $$\omega|_U = \sum_{i=1}^n dx^i\wedge dy^i.$$
> Such coordinates are called **Darboux coordinates** around $p$.

> [!success] Proof
> Step 1. **Linear normalization at $p$.**  
> Choose any local chart $(U,z^1,\dots,z^{2n})$ centered at $p$. At the point $p$, the 2-form $\omega_p$ is a symplectic form on the vector space $T_pM$. Choose a symplectic basis $\{e_1,\dots,e_n,f_1,\dots,f_n\}$ of $T_pM$ such that
> $$\omega_p(e_i,f_j)=\delta_{ij},\quad \omega_p(e_i,e_j)=\omega_p(f_i,f_j)=0.$$
> Using these basis vectors as coordinate directions, construct new local coordinates $(x'^1,\dots,x'^n,y'^1,\dots,y'^n)$ on a neighborhood $U'\ni p$ such that the coordinate vector fields satisfy
> $$\left.\frac{\partial}{\partial x'^i}\right|_p = e_i,\quad \left.\frac{\partial}{\partial y'^i}\right|_p = f_i.$$
> In these coordinates, at the point $p$ we have
> $$\omega_p = \sum_{i=1}^n dx'^i\wedge dy'^i\big|_p.$$
> 
> Step 2. **A model form on the chart.**  
> On $U'$, define the 2-form
> $$\omega_1 := \sum_{i=1}^n dx'^i\wedge dy'^i.$$
> This is a symplectic form on $U'$ whose value at $p$ equals $\omega_p$.
> 
> Step 3. **Apply the relative Moser theorem at $X=\{p\}$.**  
> Consider $\omega_0 := \omega|_{U'}$ and $\omega_1$ as two symplectic forms on $U'$ that agree at $p$. The relative Moser theorem (Theorem 3.5) with $X=\{p\}$ yields smaller neighborhoods $U_0,U_1\subset U'$ of $p$ and a diffeomorphism
> $$\varphi : U_0 \to U_1$$
> such that $\varphi(p)=p$ and
> $$\varphi^*\omega_1 = \omega_0 = \omega|_{U_0}.$$
> 
> Step 4. **Pull back the model coordinates.**  
> Define new local coordinates on $U_0$ by
> $$x^i := x'^i\circ\varphi,\quad y^i := y'^i\circ\varphi.$$
> Then
> $$\omega|_{U_0} = \varphi^*\omega_1 = \varphi^*\left(\sum_{i=1}^n dx'^i\wedge dy'^i\right) = \sum_{i=1}^n d(x'^i\circ\varphi)\wedge d(y'^i\circ\varphi) = \sum_{i=1}^n dx^i\wedge dy^i.$$
> This gives the desired Darboux coordinates.

### 3.2.2 Immediate corollaries

> [!abstract] Corollary 3.7 (Darboux charts)
> Every symplectic manifold $(M,\omega)$ admits an atlas of charts
> $$\alpha : U \to \alpha(U)\subset\mathbb{R}^{2n}$$
> such that $\alpha^*\omega_0=\omega$, where $\omega_0=\sum dx^i\wedge dy^i$ is the standard form. Transition maps between such charts have derivatives in $\mathrm{Sp}(2n,\mathbb{R})$.

> [!success] Proof
> For each point $p\in M$ choose a Darboux chart $(U_p,x^i_p,y^i_p)$; these form an open cover. If $\alpha,\beta$ are two such charts, then on $U_\alpha\cap U_\beta$ we have
> $$\alpha^*\omega_0 = \omega = \beta^*\omega_0,$$
> so $(\beta\circ\alpha^{-1})^*\omega_0=\omega_0$. Hence $d(\beta\circ\alpha^{-1})(x)\in\mathrm{Sp}(2n,\mathbb{R})$ for all $x$ in the overlap.

> [!danger] Remark 3.8 (No local invariants)
> In Riemannian geometry, curvature provides local invariants that distinguish metrics. For symplectic manifolds, Darboux's theorem shows that **all symplectic forms look alike in a neighborhood of any point**: there are no local invariants of symplectic structures, only global ones (such as de Rham cohomology classes and other symplectic invariants).

---

## 3.3 Symplectic, isotropic, coisotropic, and Lagrangian submanifolds

We now study submanifolds of a symplectic manifold, generalizing the linear algebra from Chapter 1.

### 3.3.1 Symplectic orthogonals in the linear case

Let $(V,\omega)$ be a symplectic vector space of dimension $2n$.

> [!info] Definition (symplectic orthogonal)
> For a subspace $W\subset V$, the **symplectic orthogonal** $W^\omega\subset V$ is
> $$W^\omega := \{ v\in V \mid \omega(v,w)=0\ \text{for all }w\in W\}.$$

> [!abstract] Proposition 3.9
> Let $(V,\omega)$ be symplectic and $W\subset V$ a subspace. Then:
> 1. $\dim W + \dim W^\omega = 2n$.
> 2. $(W^\omega)^\omega = W$.
> 3. $W$ is
>    - **isotropic** if $W\subset W^\omega$,
>    - **coisotropic** if $W^\omega\subset W$,
>    - **Lagrangian** if $W=W^\omega$.
> 4. If $W$ is isotropic then $\dim W \le n$; if $W$ is coisotropic then $\mathrm{codim}\,W\le n$; if $W$ is Lagrangian then $\dim W = n$.

> [!success] Proof (sketch)
> The map $V\to W^*$, $v\mapsto (w\mapsto\omega(v,w))$, is surjective with kernel $W^\omega$ by nondegeneracy of $\omega$. Hence
> $$\dim V = \dim W^* + \dim W^\omega = \dim W + \dim W^\omega,$$
> giving (1), and (2) follows similarly. Item (4) is an immediate consequence: if $W\subset W^\omega$, then
> $$2n = \dim W + \dim W^\omega \ge 2\dim W,$$
> so $\dim W\le n$; the other statements are analogous.

### 3.3.2 Submanifolds in a symplectic manifold

Let $(M^{2n},\omega)$ be symplectic and $Q\subset M$ a smooth submanifold.

> [!info] Definition (symplectic/isotropic/coisotropic/Lagrangian submanifolds)
> A submanifold $Q\subset M$ is:
> - **symplectic** if for every $q\in Q$, the subspace $T_qQ\subset T_qM$ is symplectic (i.e. $\omega_q|_{T_qQ}$ is nondegenerate);
> - **isotropic** if $T_qQ$ is isotropic in $T_qM$ for all $q$;
> - **coisotropic** if $T_qQ$ is coisotropic in $T_qM$ for all $q$;
> - **Lagrangian** if $T_qQ$ is Lagrangian in $T_qM$ for all $q$.

Thus:
- $\dim Q \ge 2$ and even if $Q$ is symplectic;
- $\dim Q\le n$ if $Q$ is isotropic;
- $\dim Q\ge n$ if $Q$ is coisotropic;
- $\dim Q=n$ if $Q$ is Lagrangian.

> [!example] Example 3.10 (Submanifolds in $T^*L$)
> Let $L$ be a manifold and $T^*L$ its cotangent bundle with canonical symplectic form $\omega_{\mathrm{can}}$.
> - The zero section $L\subset T^*L$ is Lagrangian, as seen in Chapter 2.
> - Each cotangent fibre $T^*_qL\subset T^*L$ is Lagrangian.
> - More generally, if $Q\subset L$ is any submanifold, then its conormal bundle
>   $$T_Q^\perp := \{ (q,\xi)\in T^*L \mid q\in Q,\ \xi|_{T_qQ}=0 \}$$
>   is Lagrangian in $T^*L$.

> [!example] Example 3.11 (Product manifolds and diagonals)
> Let $(M,\omega)$ be symplectic and consider $M\times M$ with symplectic form
> $$\Omega := -\omega\oplus\omega = -\pi_1^*\omega + \pi_2^*\omega.$$
> Then:
> - The submanifolds $M\times\{\mathrm{pt}\}$ and $\{\mathrm{pt}\}\times M$ are symplectic.
> - The diagonal
>   $$\Delta := \{(x,x)\mid x\in M\}$$
>   is Lagrangian in $(M\times M,\Omega)$.

> [!abstract] Proposition 3.12 (Graph of a symplectomorphism)
> Let $(M,\omega)$ be symplectic and $\psi:M\to M$ a diffeomorphism. Then $\psi$ is a symplectomorphism if and only if its graph
> $$\mathrm{graph}(\psi) := \{(x,\psi(x))\mid x\in M\}\subset M\times M$$
> is Lagrangian in $(M\times M,-\omega\oplus\omega)$.

> [!success] Proof
> If $\Gamma := \mathrm{graph}(\psi)$, the inclusion $i:\Gamma\hookrightarrow M\times M$ is
> $$i(x) = (x,\psi(x)).\quad\text{Then}\quad i^*(-\omega\oplus\omega) = -\omega + \psi^*\omega.$$
> Thus $\Gamma$ is Lagrangian if and only if $-\omega+\psi^*\omega = 0$, i.e. $\psi^*\omega=\omega$.

> [!example] Example 3.13 (Hypersurfaces are coisotropic)
> Let $S\subset(M^{2n},\omega)$ be a hypersurface, i.e. $\dim S=2n-1$. At each $q\in S$, the symplectic complement $(T_qS)^\omega$ is 1-dimensional and contained in $T_qS$. Thus $S$ is coisotropic. The line field
> $$q \mapsto (T_qS)^\omega\subset T_qS$$
> is called the **characteristic distribution** of $S$.

---

## 3.4 Symplectic and Lagrangian neighborhood theorems

Darboux's theorem classifies symplectic manifolds **near a point**. The following theorems, due to Weinstein, classify symplectic manifolds **near a symplectic or Lagrangian submanifold**.

### 3.4.1 Symplectic normal bundle

Let $(M^{2n},\omega)$ be symplectic and $Q\subset M$ a symplectic submanifold of dimension $2k$.

At each $q\in Q$, we consider the symplectic orthogonal of $T_qQ$ inside $T_qM$:
$$
  (T_qQ)^\omega := \{ v\in T_qM \mid \omega_q(v,w)=0\ \text{for all }w\in T_qQ\}.
$$
Since $T_qQ$ is symplectic, we have
$$
  T_qM = T_qQ \oplus (T_qQ)^\omega,
$$
and $\omega_q|_{(T_qQ)^\omega}$ is symplectic. Varying $q$, the spaces $(T_qQ)^\omega$ form a vector subbundle of $TM|_Q$, called the **symplectic normal bundle** of $Q$, denoted $\nu^\omega(Q)$.

> [!abstract] Proposition 3.14 (Symplectic normal bundle)
> For a symplectic submanifold $Q\subset(M,\omega)$, the symplectic normal bundle $\nu^\omega(Q)\to Q$ is a symplectic vector bundle with fibre $(T_qQ)^\omega$, equipped with the restriction of $\omega$.

> [!success] Proof
> The decomposition $T_qM = T_qQ \oplus (T_qQ)^\omega$ is smooth in $q$ and gives $\nu^\omega(Q)$ the structure of a smooth subbundle of $TM|_Q$. The nondegeneracy of $\omega_q|_{(T_qQ)^\omega}$ follows from the linear symplectic algebra used to prove Proposition 3.9.

A Riemannian metric $g$ on $M$ gives another normal bundle $NQ\to Q$ (the orthogonal complement of $TQ$). One can show that $NQ$ and $\nu^\omega(Q)$ are naturally isomorphic as vector bundles; this will be used in the proof of the symplectic neighborhood theorem.

### 3.4.2 Weinstein's symplectic neighborhood theorem

> [!note] Theorem 3.15 (Symplectic neighborhood theorem)
> Let $(M,\omega)$ be a symplectic manifold and $Q\subset M$ a compact symplectic submanifold. Let $(\nu^\omega(Q),\Omega)$ be the symplectic normal bundle with its natural fibrewise symplectic form. Then there exist neighborhoods $U\subset M$ of $Q$ and $V\subset \nu^\omega(Q)$ of the zero section, and a symplectomorphism
> $$\Phi : (V,\Omega) \to (U,\omega)$$
> such that $\Phi$ restricts to the identity on the zero section $Q$.

The idea is that $(M,\omega)$ looks near $Q$ like the symplectic vector bundle $\nu^\omega(Q)$ with its standard fibrewise form.

> [!success] Proof (sketch)
> 1. Equip $M$ with a Riemannian metric $g$. Then the orthogonal complement $NQ\subset TM|_Q$ of $TQ$ is a vector bundle over $Q$, and the exponential map
>    $$\exp : NQ \supset V' \to U'\subset M$$
>    is a diffeomorphism from a neighborhood $V'$ of the zero section onto a neighborhood $U'$ of $Q$.
> 
> 2. Using the symplectic normal bundle $\nu^\omega(Q)$ and the metric, construct a bundle isomorphism
>    $$A : \nu^\omega(Q) \to NQ$$
>    covering the identity on $Q$, which is fibrewise a linear isomorphism and respects the symplectic forms in the fibres (up to pullback).
> 
> 3. Compose to obtain a diffeomorphism
>    $$\Psi := \exp\circ A : \nu^\omega(Q) \supset V \to U\subset M$$
>    from a neighborhood $V$ of the zero section onto a neighborhood $U$ of $Q$, with $\Psi|_Q = \mathrm{id}_Q$. Pull back $\omega$ to get a symplectic form $\omega_1 := \Psi^*\omega$ on $V$.
> 
> 4. On $\nu^\omega(Q)$, there is also a natural symplectic form $\Omega_0$ which in each fibre is the given linear symplectic form and is compatible with the bundle structure. By construction, $\omega_1$ and $\Omega_0$ agree along the zero section and make the zero section symplectic in the same way.
> 
> 5. Apply a relative Moser argument to the pair $(\omega_1,\Omega_0)$ on $\nu^\omega(Q)$, relative to the zero section $Q$. This yields a diffeomorphism $\chi$ from a neighborhood $V'$ of the zero section to itself, fixing $Q$ pointwise and such that $\chi^*\omega_1 = \Omega_0$ on $V'$.
> 
> 6. Set $\Phi := \Psi\circ\chi$. Then $\Phi$ is a symplectomorphism from $(V',\Omega_0)$ to $(U,\omega)$ and restricts to the identity on $Q$.

### 3.4.3 Weinstein's Lagrangian neighborhood theorem

The Lagrangian case has a particularly simple model: the cotangent bundle.

> [!note] Theorem 3.16 (Lagrangian neighborhood theorem)
> Let $(M,\omega)$ be a symplectic manifold and $L\subset M$ a compact Lagrangian submanifold. Then there exist a neighborhood $U$ of $L$ in $M$, a neighborhood $V$ of the zero section in $T^*L$, and a symplectomorphism
> $$\Phi : (V,\omega_{\mathrm{can}}) \to (U,\omega)$$
> such that $\Phi|_L = \mathrm{id}_L$ (identifying $L$ with the zero section of $T^*L$).

Intuitively, every Lagrangian submanifold looks, in a symplectic sense, like the zero section in its own cotangent bundle.

> [!success] Proof (sketch)
> Consider the product manifold
> $$N := T^*L \times M$$
> with symplectic form
> $$-\omega_{\mathrm{can}}\oplus\omega.$$
> Inside $N$ there are two Lagrangian submanifolds:
> - the **diagonal copy** $\Delta_1 := \{(x,0,x)\mid x\in L\}$, obtained from the zero section in $T^*L$ and the embedding $L\hookrightarrow M$;
> - the **graph** of an embedding $e:L\to M$ realizing $L$ as a submanifold of $M$.
> 
> One constructs a Lagrangian submanifold $\Lambda\subset N$ that interpolates between these and uses the symplectic neighborhood theorem plus a relative Moser argument to show that a neighborhood of $L$ in $M$ is symplectomorphic to a neighborhood of the zero section in $T^*L$.  
> 
> A more concrete approach is to consider the symplectic normal bundle of $L$ in $M$. Since $L$ is Lagrangian, the symplectic orthogonal of $T_xL$ is $T_xL$ itself and the symplectic normal bundle can be identified with $T^*L$. Applying the symplectic neighborhood theorem in this setting yields the claim.

### 3.4.4 Examples and applications

> [!example] Example 3.17 (Zero section in $T^*L$)
> Take $M=T^*L$, $\omega=\omega_{\mathrm{can}}$, and $L\subset T^*L$ the zero section. The Lagrangian neighborhood theorem is trivial here: we can take $U=V$ a small neighborhood of the zero section and $\Phi=\mathrm{id}$. However, the theorem says that **every** Lagrangian submanifold in any symplectic manifold looks like this model locally.

> [!example] Example 3.18 (Standard torus in $\mathbb{C}^n$)
> Let $\mathbb{C}^n\simeq\mathbb{R}^{2n}$ with coordinates $z_j=x_j+\mathrm{i}y_j$ and standard symplectic form $\omega_0 = \sum dx_j\wedge dy_j$. Consider the Lagrangian torus
> $$T^n := S^1\times\cdots\times S^1 \subset \mathbb{C}^n,\quad (e^{\mathrm{i}\theta_1},\dots,e^{\mathrm{i}\theta_n}).$$
> Near $T^n$, the Lagrangian neighborhood theorem identifies a neighborhood of $T^n$ in $(\mathbb{C}^n,\omega_0)$ with a neighborhood of the zero section in $T^*T^n$. In particular, locally the symplectic geometry around $T^n$ is entirely controlled by the linear structure of $T^*T^n$.

> [!danger] Remark 3.19 (Everything is a Lagrangian submanifold)
> Many constructions in symplectic topology can be reformulated in terms of Lagrangian submanifolds of suitable products or cotangent bundles. Graphs of symplectomorphisms, conormal bundles, and reductions of group actions all fit into this picture. The Weinstein neighborhood theorems justify treating Lagrangians as local building blocks of symplectic geometry.

In this chapter we have:

- developed Moser's method and proved the Moser stability theorem and its relative version;
- proved Darboux's theorem, showing that symplectic manifolds have no local invariants;
- introduced symplectic, isotropic, coisotropic, and Lagrangian submanifolds, with key examples;
- stated and sketched the symplectic and Lagrangian neighborhood theorems of Weinstein.

These local and semi-local results will be used repeatedly when studying Hamiltonian dynamics, group actions, and symplectic reduction in later chapters.
