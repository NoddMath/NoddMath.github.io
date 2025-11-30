+++
date = "2025-04-01T15:44:10-04:00"
draft = false
title = "Hamiltonian Torus Actions, Convexity and Toric Manifolds"
categories = "Math"
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

In this chapter we specialize the general theory of moment maps and symplectic reduction to the case of Hamiltonian torus actions.

Throughout, $T^k = \mathbb{R}^k / \mathbb{Z}^k$ denotes the standard $k$-torus with Lie algebra $\mathfrak{t} \cong \mathbb{R}^k$ and dual $\mathfrak{t}^* \cong \mathbb{R}^k$.

## 7.1 Hamiltonian torus actions

We begin by isolating the structure we want to study.

> [!info] Hamiltonian $T^k$-action
> Let $(M,\omega)$ be a symplectic manifold and $T^k$ a torus with Lie algebra $\mathfrak{t}$.
> A smooth action
> $$T^k \to \mathrm{Symp}(M,\omega),\qquad \theta \mapsto \psi_\theta$$
> is **Hamiltonian** if there exists a map (called a **moment map**)
> $$\mu : M \to \mathfrak{t}^*$$
> such that for every $\xi \in \mathfrak{t}$, if $X_\xi$ denotes the infinitesimal vector field
> $$X_\xi(p) = \left.\frac{d}{dt}\right|_{t=0}\psi_{\exp(t\xi)}(p),$$
> then
> $$d\langle \mu,\xi\rangle = \iota_{X_\xi}\omega.$$
> Here $\langle \cdot,\cdot\rangle$ is the natural pairing $\mathfrak{t}^* \times \mathfrak{t} \to \mathbb{R}$.

When the torus is abelian, no Lie-bracket terms appear in the defining equations; this is one reason toric geometry is technically much simpler than the general compact group case.

> [!info] Effective action and complexity
> Let $(M^{2n},\omega,T^k,\mu)$ be a Hamiltonian $T^k$-space.
> - The action is **effective** if the only element $\theta \in T^k$ acting trivially on $M$ is the identity.
> - The **complexity** of the action is the integer
>   $$\mathrm{cx}(M,T^k) := n - k.$$
>   The case $\mathrm{cx}=0$ (i.e. $k=n$) is the **toric** situation.

The moment map is defined only up to addition of a constant in $\mathfrak{t}^*$. We will often fix this ambiguity by requiring that $\mu(M)$ lies in a convenient region of $\mathfrak{t}^*$ (for instance a given affine hyperplane).

### 7.1.1 Isotropy and fixed points

For a point $p \in M$ we denote by
$$T_p := \{\theta \in T^k \mid \psi_\theta(p) = p\}$$
its **isotropy subgroup**, and by $\mathfrak{t}_p \subset \mathfrak{t}$ its Lie algebra. The tangent space at $p$ splits as a symplectic representation of $T^k$:
$$T_pM \cong T_p(T^k\!\cdot p) \oplus \nu_p,$$
where $T^k\!\cdot p$ is the orbit and $\nu_p$ is the symplectic normal to the orbit. In the torus case this representation decomposes into complex one-dimensional weight spaces.

A particularly important role is played by the **fixed point set**
$$M^{T^k} := \{p \in M \mid \psi_\theta(p)=p\ \text{for all}\ \theta\in T^k\}.$$

> [!note] Fixed points are symplectic submanifolds
> Let $(M,\omega)$ carry a Hamiltonian $T^k$-action with moment map $\mu$.
> Then every connected component of the fixed point set $M^{T^k}$ is a
> symplectic submanifold of $(M,\omega)$, and the restriction of $\mu$ to each
> component is constant.

> [!success] Proof
> Let $F$ be a connected component of $M^{T^k}$ and $p \in F$.
> The isotropy subgroup at $p$ is all of $T^k$, so the isotropy representation
> $$T^k \curvearrowright T_pM$$
> is a linear symplectic representation.
> 
> Since $T^k$ is abelian and compact, we may choose a $T^k$-invariant almost complex structure $J$ compatible with $\omega$. Then $T_pM$ is a unitary representation of $T^k$ and decomposes as
> $$T_pM \cong T_pF \oplus \bigoplus_{j} V_{\alpha_j},$$
> where each $V_{\alpha_j} \cong \mathbb{C}$ is a complex one-dimensional weight space on which $T^k$ acts by a nontrivial unitary character. The subspace $T_pF$ consists of vectors fixed by $T^k$.
> 
> Each weight space $V_{\alpha_j}$ is symplectic (it is a complex line with the standard Hermitian form), hence
> $$(T_pF)^\omega = \bigoplus_j V_{\alpha_j}$$
> is a direct sum of symplectic subspaces. Therefore $(T_pF)^\omega \cap T_pF = \{0\}$, which shows that $T_pF$ is itself a symplectic subspace. Since this holds at every $p \in F$, the restriction $\omega|_F$ is nondegenerate, so $F$ is a symplectic submanifold.
> 
> Finally, for every $\xi \in \mathfrak{t}$ the Hamiltonian function
> $$\mu^\xi := \langle \mu, \xi\rangle$$
> satisfies $d\mu^\xi = \iota_{X_\xi}\omega$. On $F$ we have $X_\xi \equiv 0$, hence
> $d\mu^\xi|_F=0$. Thus each $\mu^\xi$ is constant on $F$, and so is $\mu$.

In particular, the image $\mu(M)$ is the convex hull of finitely many points
$\mu(F_j)$, one for each fixed point component $F_j$ (this will be made precise later).

### 7.1.2 Basic examples

We now record the standard linear and projective torus actions that will serve as test cases throughout this chapter.

> [!example] Linear torus action on $\mathbb{C}^n$
> Consider $(\mathbb{C}^n,\omega_0)$ with
> $$\omega_0 = \sum_{j=1}^n dx_j \wedge dy_j = \frac{i}{2}\sum_{j=1}^n dz_j\wedge d\bar{z}_j, \qquad z_j = x_j + i y_j.$$
> The standard action of $T^n = \mathbb{R}^n/\mathbb{Z}^n$ is
> $$(\theta_1,\dots,\theta_n)\cdot(z_1,\dots,z_n)=(e^{2\pi i\theta_1}z_1,\dots,e^{2\pi i\theta_n}z_n).$$
> This is Hamiltonian with moment map
> $$\mu : \mathbb{C}^n \to \mathbb{R}^n,\qquad \mu(z) = \pi\bigl(|z_1|^2,\dots,|z_n|^2\bigr),$$
> up to addition of a constant vector.
> For each $j$, the Hamiltonian $\mu^{e_j}(z)=\pi|z_j|^2$ generates the circle rotation in the $z_j$-plane.

> [!example] Projective space $\mathbb{C}P^n$
> Let $\mathbb{C}P^n$ be equipped with the Fubini–Study form $\omega_{\mathrm{FS}}$, normalized so that $\int_{\mathbb{C}P^1}\omega_{\mathrm{FS}} = \pi$.
> The torus $T^n$ acts by
> $$(\theta_1,\dots,\theta_n)\cdot [z_0: z_1:\dots:z_n]=[z_0: e^{-2\pi i\theta_1}z_1:\dots:e^{-2\pi i\theta_n}z_n].$$
> A moment map for this action is
> $$\mu([z_0:\dots:z_n]) = \pi\left( \frac{|z_1|^2}{\|z\|^2},\dots, \frac{|z_n|^2}{\|z\|^2} \right), \qquad \|z\|^2 := \sum_{j=0}^n |z_j|^2.$$
> The image $\mu(\mathbb{C}P^n)$ is the simplex
> $$\Delta = \Bigl\{(x_1,\dots,x_n)\in\mathbb{R}^n \ \Big|\ x_j\ge0,\ \sum_{j=1}^n x_j \le \pi\Bigr\}.$$
> The $n+1$ fixed points
> $[1:0:\dots:0],\dots,[0:\dots:0:1]$ are sent to the vertices of $\Delta$.

These examples already exhibit a key phenomenon: the moment map image is a **convex polytope**, and the typical fiber over an interior point is an $n$-torus.

## 7.2 Convexity and connectedness theorems

We now state the central result about Hamiltonian torus actions on compact manifolds.

Let $(M,\omega)$ be a **closed** connected symplectic manifold (compact without boundary). Suppose we have a Hamiltonian action
$$T^m \to \mathrm{Symp}(M,\omega)$$
with moment map $\mu : M \to \mathbb{R}^m$ (after identifying $\mathfrak{t}^*\cong\mathbb{R}^m$).

> [!note] Atiyah–Guillemin–Sternberg convexity theorem
> Let $(M,\omega)$ be closed and connected, and let $T^m$ act in a Hamiltonian way with moment map $\mu : M \to \mathbb{R}^m$.
> Then:
> 1. The image $\mu(M)\subset\mathbb{R}^m$ is a **convex polytope**.
> 2. Each fiber $\mu^{-1}(\eta)$ is connected for every $\eta\in\mathbb{R}^m$.
> 3. The fixed point set is a finite disjoint union
>    $$M^{T^m} = C_1 \sqcup \cdots \sqcup C_N$$
>    of connected symplectic submanifolds, the moment map is constant on each
>    $C_j$, and
>    $$\mu(M) = \mathrm{Conv}\{\mu(C_1),\dots,\mu(C_N)\}.$$

We will sketch the proof, emphasizing the role of Morse–Bott theory.

### 7.2.1 Morse–Bott functions from the moment map

For every $\xi \in \mathfrak{t} \cong \mathbb{R}^m$, consider the component
$$\mu^\xi:=\langle \mu,\xi\rangle:M\to \mathbb{R}.$$

> [!note] Morse–Bott property
> For each $\xi$, the function $\mu^\xi$ is a Morse–Bott function whose critical set is the fixed point set of the circle subgroup generated by $\xi$:
> $$\mathrm{Crit}(\mu^\xi)=M^{S^1_\xi},$$
> and all critical manifolds have even Morse index and even coindex.

> [!success] Proof (sketch)
> Fix $\xi \in \mathfrak{t}$ and consider the Hamiltonian vector field
> $$X_\xi \quad\text{defined by}\quad d\mu^\xi = \iota_{X_\xi}\omega.$$
> The flow of $X_\xi$ is the action of the circle subgroup $S^1_\xi \subset T^m$ generated by $\xi$.
> Hence a point $p\in M$ is critical for $\mu^\xi$ iff $X_\xi(p)=0$, i.e. iff it is fixed by this circle action:
> $$\mathrm{Crit}(\mu^\xi)=M^{S^1_\xi}.$$
> 
> Choose a compatible almost complex structure $J$ invariant under the torus action and the associated Riemannian metric $g(\cdot,\cdot)=\omega(\cdot,J\cdot)$.
> At a critical point $p$, the Hessian of $\mu^\xi$ is represented by a symmetric operator
> $$S_p:T_pM\to T_pM$$
> such that the linearization of the flow is $-J S_p$.
> The operator $S_p$ commutes with $J$, hence its eigenspaces are $J$-invariant and thus even-dimensional.
> This implies that the negative eigenspace and the positive eigenspace are even-dimensional, so both the index and coindex are even. One also checks that the kernel of $S_p$ is precisely the tangent space to the fixed locus, so the critical set is a smooth submanifold and $\mu^\xi$ is Morse–Bott.

The key consequence from Morse–Bott theory is:

> [!note] Connectivity of level sets in the $S^1$-case
> Let $f : M \to \mathbb{R}$ be a Morse–Bott function on a closed connected manifold $M$ such that every critical manifold has even index and coindex.
> Then every level set $f^{-1}(c)$ is connected (or empty).

Applied to $f=\mu^\xi$, this shows that when $m=1$ the moment map image is an interval and all fibers are connected.

### 7.2.2 Induction on the torus dimension

For higher-dimensional tori, one proceeds by induction on $m$.

The first step is to remove redundancy:

> [!info] Irreducible moment map
> Write $\mu = (\mu_1,\dots,\mu_m)$.
> - The moment map is **irreducible** if the $1$-forms $d\mu_1,\dots,d\mu_m$ are linearly independent on a dense open subset of $M$.
> - If there is a nonzero vector $\theta\in\mathbb{R}^m$ such that
>   $$H_\theta := \sum_{j=1}^m \theta_j\mu_j$$
>   is constant, then the action factors through an $(m-1)$-dimensional torus and we can reduce the convexity problem to that of a lower-dimensional torus.

Assuming $\mu$ is irreducible, one shows that the set
$$Z := \bigcup_{\theta\neq 0} \mathrm{Crit}(H_\theta)$$
is a countable union of proper submanifolds, so its complement $M\setminus Z$ is open and dense. On this set the differentials $d\mu_1,\dots,d\mu_m$ are linearly independent, hence $\mu$ is a submersion there.

The connectedness of the fibers of $\mu$ is proved by induction on $m$, using the following idea:

- For $m-1$-dimensional subtori one knows by the inductive hypothesis that the corresponding moment map fibers are connected.
- One then analyzes the restriction of the last component $\mu_m$ to intersections of the form
  $$Q=\bigcap_{j=1}^{m-1} \mu_j^{-1}(\xi_j),$$
  and shows, via Morse–Bott arguments applied to $\mu_m|_Q$, that the level sets of $\mu_m$ within $Q$ are connected.
- This yields connectivity of the full fibers $\mu^{-1}(\xi)$.

We will not reproduce the technical details here; instead we focus on the geometric consequences for the moment polytope.

### 7.2.3 Convexity of the image

Once one knows that all fibers $\mu^{-1}(\xi)$ are connected, convexity of $\mu(M)$ follows from a rather general lemma in convex geometry:

> [!note] Convexity via connected fibers
> Let $M$ be compact and connected, and $f : M \to \mathbb{R}^m$ continuous.
> Suppose that:
> - each fiber $f^{-1}(y)$ is connected;
> - for every affine line $\ell \subset \mathbb{R}^m$, the intersection $f(M)\cap \ell$ is an interval (possibly empty).
> 
> Then $f(M)$ is a convex set.

Applied to $f=\mu$, the second condition is verified by considering the functions $\mu^\xi$ for various $\xi$: along the line $\ell=\eta_0+\mathbb{R}\xi$, the function $\mu^\xi$ has connected level sets and extreme values at fixed points; this forces $f(M)\cap\ell$ to be an interval.

Finally, compactness implies that $\mu(M)$ is a **polytope**, i.e. the convex hull of finitely many points, which come from the finitely many components of $M^{T^m}$.

### 7.2.4 A remark on Duistermaat–Heckman theory

Let $(M^{2n},\omega,T^m,\mu)$ be as above. The Liouville measure
$$\frac{\omega^n}{n!}$$
is $T^m$-invariant and can be pushed forward under the moment map:
$$\nu := \mu_*\left(\frac{\omega^n}{n!}\right).$$
Duistermaat–Heckman theory shows that $\nu$ has a **piecewise polynomial density** with respect to Lebesgue measure on $\mathbb{R}^m$, and the density is given by a polynomial on each chamber cut out by the walls corresponding to critical values of $\mu$. We will not use this further, but it is part of the same circle of ideas.

---

## 7.3 Symplectic toric manifolds

We now focus on the extremal case $\dim T^n = \frac{1}{2}\dim M$.

> [!info] Symplectic toric manifold
> A **symplectic toric manifold** is a quadruple
> $$(M^{2n},\omega,T^n,\mu)$$
> where
> - $(M^{2n},\omega)$ is a compact connected symplectic manifold;
> - $T^n$ is an $n$-torus acting effectively and Hamiltonianly on $M$;
> - $\mu : M \to \mathfrak{t}^* \cong \mathbb{R}^n$ is a moment map for this action.

The convexity theorem tells us immediately:

> [!note] Moment polytope of a toric manifold
> If $(M^{2n},\omega,T^n,\mu)$ is symplectic toric, then:
> - the image $\Delta_M := \mu(M)$ is a convex polytope in $\mathbb{R}^n$;
> - for any regular value $a \in \mathrm{int}(\Delta_M)$, the fiber
>   $\mu^{-1}(a)$ is a Lagrangian $n$-torus.

We call $\Delta_M$ the **moment polytope** of the toric manifold.

### 7.3.1 Basic examples and their polytopes

We revisit the examples from §7.1 with an eye toward their polytopes.

> [!example] $\mathbb{C}P^n$ as a toric manifold
> The $T^n$-action and moment map on $(\mathbb{C}P^n,\omega_{\mathrm{FS}})$ described earlier make it a symplectic toric manifold.
> The moment polytope is the simplex
> $$\Delta_{\mathbb{C}P^n} = \Bigl\{(x_1,\dots,x_n)\in\mathbb{R}^n \ \Big|\ x_j\ge0,\ \sum_{j=1}^n x_j \le \pi\Bigr\}.$$
> - Vertices correspond to the $n+1$ coordinate points $[1:0:\dots:0],\dots,[0:\dots:0:1]$.
> - Each facet corresponds to a divisor $\{z_j=0\}$ or the hyperplane at infinity.

> [!example] $\mathbb{C}P^1 \times \mathbb{C}P^1$
> Let each factor $\mathbb{C}P^1$ carry the standard $S^1$-action and Fubini–Study form.
> The product torus $T^2 = S^1\times S^1$ acts on
> $$(\mathbb{C}P^1 \times \mathbb{C}P^1, \omega_{\mathrm{FS}}\oplus\omega_{\mathrm{FS}}).$$
> A moment map is
> $$\mu([z_0:z_1],[w_0:w_1]) = (\pi \tfrac{|z_1|^2}{\|z\|^2}, \pi \tfrac{|w_1|^2}{\|w\|^2}),$$
> so the image is the rectangle
> $$\Delta_{\mathbb{C}P^1\times\mathbb{C}P^1} = [0,\pi] \times [0,\pi] \subset \mathbb{R}^2.$$
> Interior points correspond to Lagrangian $T^2$-orbits; points on an edge correspond to $S^1$-orbits; vertices correspond to fixed points.

> [!example] A Hirzebruch surface
> Certain **Hirzebruch surfaces** $F_k$ (ruled surfaces over $\mathbb{C}P^1$) admit toric structures.
> Their moment polytopes are quadrilaterals obtained by “shearing” a rectangle:
> a trapezoid with one pair of parallel edges and two edges of different slope.
> For suitable slopes the resulting quadrilateral is a Delzant polytope, and the associated toric surface is $F_k$.
> 
> Concretely, one can take
> $$\Delta_k = \{(x,y)\in\mathbb{R}^2 \mid 0\le x\le a,\ 0\le y\le b + kx\}$$
> for certain positive constants $a,b$ and integer $k\ge0$. The four edges correspond to the four torus-invariant divisors on $F_k$.

These three examples already illustrate how much of the geometry can be read off from the combinatorics of the polytope.

## 7.4 Delzant polytopes and classification

The remarkable fact, due to Delzant, is that **all** compact connected symplectic toric manifolds are completely determined (up to equivariant symplectomorphism) by their moment polytopes, and conversely, every “nice” polytope arises in this way.

### 7.4.1 Delzant polytopes

We first define the class of “nice” polytopes.

> [!info] Delzant polytope
> A convex polytope $\Delta \subset \mathbb{R}^n$ is a **Delzant polytope** if:
> 1. (**Simple**) At each vertex exactly $n$ edges meet.
> 2. (**Rational**) Each edge has the form $p + t u_i$ with $t\ge0$ and
>    $u_i \in \mathbb{Z}^n$.
> 3. (**Smooth**) For each vertex $p$, the primitive edge vectors
>    $u_1,\dots,u_n \in \mathbb{Z}^n$ (chosen to point away from $p$)
>    form a $\mathbb{Z}$-basis of $\mathbb{Z}^n$.

Here “primitive” means a lattice vector that is not a multiple of a smaller one, i.e. it is not of the form $k v$ with $|k| >1$.

Equivalently, a Delzant polytope is one that is **simple, rational, and smooth** in the sense of toric geometry.

> [!example] Basic Delzant polytopes in $\mathbb{R}^2$
> In dimension $2$, Delzant polygons are exactly convex polygons such that:
> - each vertex has exactly two edges meeting (automatic for planar polygons);
> - the edge directions at each vertex are primitive integer vectors;
> - these two vectors form a basis of $\mathbb{Z}^2$ (i.e. they have determinant $\pm 1$).
> 
> Examples:
> - A rectangle with sides parallel to the axes is Delzant.
> - A right triangle with vertices $(0,0),(a,0),(0,b)$ and $a,b>0$ is Delzant.
> - A trapezoid corresponding to a Hirzebruch surface (as in §7.3.1) is Delzant for suitable slopes.
> 
> Non-examples:
> - A vertex where the adjacent edges have directions $(1,0)$ and $(2,1)$ fails smoothness (determinant $\neq \pm1$).
> - A vertex where three or more edges meet fails simplicity.

Given a Delzant polytope $\Delta$, we will write it in the form
$$\Delta = \{x\in\mathbb{R}^n \mid \langle x,v_i\rangle \le \lambda_i,\ i=1,\dots,d\},$$
where
- $d$ is the number of facets (codimension-one faces),
- $v_i \in \mathbb{Z}^n$ is the primitive outward-pointing normal vector to the $i$-th facet,
- $\lambda_i\in\mathbb{R}$ are real constants (the “support numbers”).

### 7.4.2 Statement of Delzant’s theorem

> [!note] Delzant theorem (classification of symplectic toric manifolds)
> There is a one-to-one correspondence
> $$\{ \text{compact connected symplectic toric manifolds} \}/\cong \ \longleftrightarrow\ \{ \text{Delzant polytopes in }\mathbb{R}^n\}/\text{translation},$$
> given by
> $$(M^{2n},\omega,T^n,\mu)\ \longmapsto\ \mu(M)=\Delta_M.$$
> Conversely, given a Delzant polytope $\Delta$, there exists a symplectic toric manifold $(M_\Delta,\omega_\Delta,T^n,\mu_\Delta)$ with $\mu_\Delta(M_\Delta)=\Delta$, and it is unique up to equivariant symplectomorphism and translation of the moment map.

The proof breaks into two parts:

1. **Existence**: Given $\Delta$, construct $(M_\Delta,\omega_\Delta,T^n,\mu_\Delta)$.
2. **Uniqueness**: Show that if two toric manifolds have the same Delzant polytope, then they are equivariantly symplectomorphic.

In this section we give a reasonably detailed sketch of the **existence** part.

### 7.4.3 Delzant construction: algebraic set-up

Let $\Delta \subset \mathbb{R}^n$ be a Delzant polytope with $d$ facets. As above, write
$$\Delta = \{x\in\mathbb{R}^n \mid \langle x,v_i\rangle \le \lambda_i,\ i=1,\dots,d\},$$
with primitive outward normals $v_i\in\mathbb{Z}^n$.

Consider the linear map
$$\pi:\mathbb{R}^d\to \mathbb{R}^n,\quad e_i\mapsto v_i,$$
where $\{e_1,\dots,e_d\}$ is the standard basis of $\mathbb{R}^d$.

> [!abstract] Lemma
> The map $\pi : \mathbb{R}^d \to \mathbb{R}^n$ is surjective and maps $\mathbb{Z}^d$ onto $\mathbb{Z}^n$.

> [!success] Proof
> The Delzant condition states that at each vertex of $\Delta$ there are exactly $n$ facets meeting, and the corresponding primitive outward normals form a $\mathbb{Z}$-basis of $\mathbb{Z}^n$.
> Hence the set $\{v_1,\dots,v_d\}$ spans $\mathbb{R}^n$ and generates $\mathbb{Z}^n$ as a lattice.
> This implies surjectivity of $\pi$ and $\pi(\mathbb{Z}^d)=\mathbb{Z}^n$.

From $\pi$ we obtain short exact sequences of Lie algebras and tori:
$$0 \longrightarrow \mathfrak{n} \xrightarrow{i} \mathbb{R}^d \xrightarrow{\pi} \mathbb{R}^n \longrightarrow 0,$$
$$0 \longrightarrow N \xrightarrow{i} T^d \xrightarrow{\Pi} T^n \longrightarrow 0,$$
where
- $T^d = \mathbb{R}^d / \mathbb{Z}^d$ and $T^n = \mathbb{R}^n/\mathbb{Z}^n$,
- $\mathfrak{n} = \ker(\pi)$, $N = \ker(\Pi)$.

Dually, we have
$$0 \longrightarrow (\mathbb{R}^n)^* \xrightarrow{\pi^*} (\mathbb{R}^d)^* \xrightarrow{i^*} \mathfrak{n}^* \longrightarrow 0.$$

---

### 7.4.4 Hamiltonian $T^d$-action on $\mathbb{C}^d$ and reduction by $N$

Equip $\mathbb{C}^d$ with the standard symplectic form
$$\omega_0 = \frac{i}{2}\sum_{k=1}^d dz_k\wedge d\bar{z}_k.$$

The torus $T^d$ acts by coordinatewise rotations:
$$(t_1,\dots,t_d)\cdot(z_1,\dots,z_d) = (e^{2\pi i t_1}z_1,\dots,e^{2\pi i t_d}z_d).$$

> [!info] Standard moment map on $\mathbb{C}^d$
> A moment map for the $T^d$-action is
> $$\Phi : \mathbb{C}^d \to (\mathbb{R}^d)^*,\qquad \Phi(z_1,\dots,z_d) = -\pi\bigl(|z_1|^2,\dots,|z_d|^2\bigr) + (\lambda_1,\dots,\lambda_d),$$
> where we regard $(\lambda_1,\dots,\lambda_d)$ as a constant in $(\mathbb{R}^d)^*\cong\mathbb{R}^d$.

Restrict the action to the subtorus $N\subset T^d$. By general theory, this is again Hamiltonian, with moment map given by the composition
$$\mu_N := i^* \circ \Phi : \mathbb{C}^d \to \mathfrak{n}^*.$$

We define the **zero-level set**
$$Z := \mu_N^{-1}(0) = \{z\in \mathbb{C}^d \mid i^*\Phi(z)=0\}.$$

> [!abstract] Proposition
> The set $Z$ is a smooth compact submanifold of $\mathbb{C}^d$, and the $N$-action on $Z$ is free and proper.

> [!success] Proof (sketch)
> - Smoothness: By construction, $\mu_N$ is a submersion at each point of $Z$ (one checks that $0$ is a regular value using the Delzant conditions and the explicit form of $\Phi$), so $Z=\mu_N^{-1}(0)$ is a smooth submanifold.
> - Compactness: The equation $i^*\Phi(z)=0$ implies that $\Phi(z)\in\mathrm{im}\,\pi^*$, which can be identified with $(\mathbb{R}^n)^*$. Writing $\Phi(z) = -\pi(|z_1|^2,\dots,|z_d|^2) + \lambda$, the condition that $\Phi(z)$ lies in $\mathrm{im}\,\pi^*$ forces the vector $|z|^2=(|z_1|^2,\dots,|z_d|^2)$ to satisfy a system of linear inequalities equivalent to $x\in\Delta$, where $x$ corresponds to the image in $(\mathbb{R}^n)^*$. Since $\Delta$ is bounded, the norms $|z_k|$ are uniformly bounded; thus $Z$ is contained in a compact subset of $\mathbb{C}^d$.
> - Freeness: If $n\in N$ fixes a point $z\in Z$, then its differential acts trivially on the tangent space. In the linear model one shows that the weights of the $N$-representation at $z$ form a $\mathbb{Z}$-basis of the character lattice of $N$ (this uses the smoothness condition at the vertices of $\Delta$). Hence the only element acting trivially is the identity.
> - Properness follows from compactness of $Z$ and compactness of $N$.
> 
> Details require a careful local analysis near points where some coordinates vanish, but the key input is that the edge directions at each vertex of $\Delta$ form a basis of $\mathbb{Z}^n$.

Since $0$ is a regular value and the action is free, the Marsden–Weinstein–Meyer reduction theorem applies.

> [!info] Reduced space
> The quotient
> $$M_\Delta := Z / N$$
> is a smooth compact manifold of real dimension
> $$\dim_\mathbb{R} M_\Delta = \dim_\mathbb{R} Z - \dim N = (2d - \dim\mathfrak{n}^*) - (d-n) = 2n.$$
> There exists a unique symplectic form $\omega_\Delta$ on $M_\Delta$ such that
> $$p^*\omega_\Delta = j^*\omega_0,$$
> where $j:Z\hookrightarrow\mathbb{C}^d$ is the inclusion and
> $p:Z\to M_\Delta$ is the quotient map.

### 7.4.5 Induced $T^n$-action and moment map on $M_\Delta$

The action of $T^d$ on $\mathbb{C}^d$ commutes with that of $N$, so it descends to an effective action of the quotient torus
$$T^n = T^d / N$$
on $M_\Delta$. This action is symplectic with respect to $\omega_\Delta$.

We now define a moment map $\mu_\Delta : M_\Delta\to\mathbb{R}^n$.

Observe that for any $z\in Z$ we have $\mu_N(z)=0$, i.e.
$$i^*\Phi(z)=0 \quad\Longleftrightarrow\quad \Phi(z)\in\ker(i^*) = \mathrm{im}(\pi^*).$$
Thus there exists a unique element $x\in (\mathbb{R}^n)^*$ such that
$$\Phi(z) = \pi^*(x).$$
We define
$$\mu_\Delta([z]) := x,$$
where $[z]\in M_\Delta$ denotes the $N$-orbit of $z$.

> [!abstract] Proposition
> The map $\mu_\Delta : M_\Delta\to(\mathbb{R}^n)^*\cong\mathbb{R}^n$ is a moment map for the $T^n$-action on $(M_\Delta,\omega_\Delta)$, and its image coincides with $\Delta$.

> [!success] Proof
> **(1) Well-definedness.**  
> If $z,z'\in Z$ lie in the same $N$-orbit, then there exists $n\in N$ with $z'=n\cdot z$. Since $\Phi$ is $T^d$-equivariant and $N\subset T^d$, we have $\Phi(z')=\Phi(z)$. Hence the corresponding $x$ is the same, so $\mu_\Delta$ is well-defined on orbits.
> 
> **(2) Moment map property.**  
> For $\xi\in \mathfrak{t}=\mathbb{R}^n$, the corresponding infinitesimal vector field on $M_\Delta$ lifts to the infinitesimal vector field on $Z$ coming from a vector $\tilde{\xi}\in\mathbb{R}^d$ with $\pi(\tilde{\xi})=\xi$.
> The Hamiltonian on $\mathbb{C}^d$ associated to $\tilde{\xi}$ is
> $$H_{\tilde{\xi}}(z) = \langle \Phi(z), \tilde{\xi}\rangle.$$
> On $Z$, this equals
> $$H_{\tilde{\xi}}(z) = \langle \pi^* \mu_\Delta([z]), \tilde{\xi}\rangle = \langle \mu_\Delta([z]), \pi(\tilde{\xi})\rangle = \langle \mu_\Delta([z]), \xi\rangle.$$
> Since reduction preserves the Hamiltonian structure, the function
> $\langle \mu_\Delta,\xi\rangle$ is the Hamiltonian for the infinitesimal action of $\xi$ on $M_\Delta$. This gives
> $$d\langle \mu_\Delta,\xi\rangle = \iota_{X_\xi}\omega_\Delta,$$
> so $\mu_\Delta$ is a moment map.
> 
> **(3) Image of $\mu_\Delta$.**  
> We rewrite the defining inequalities of $\Delta$ as
> $$\langle x,v_i\rangle \le \lambda_i,\quad i=1,\dots,d.$$
> For any $z\in Z$ we have
> $$\Phi(z) = -\pi(|z_1|^2,\dots,|z_d|^2) + \lambda, \quad \lambda=(\lambda_1,\dots,\lambda_d).$$
> Writing $|z|^2=(|z_1|^2,\dots,|z_d|^2)$, the condition $\Phi(z)\in\mathrm{im}\,\pi^*$ implies there exists $x\in(\mathbb{R}^n)^*$ with
> $$\pi^*(x) = -\pi(|z|^2) + \lambda.$$
> Evaluating on $e_i\in\mathbb{R}^d$ gives
> $$\langle x,v_i\rangle = \langle \pi^*x,e_i\rangle = -\pi |z_i|^2 + \lambda_i.$$
> Therefore
> $$\langle x,v_i\rangle \le \lambda_i$$
> for all $i$, and equality holds precisely when $z_i=0$.
> Thus $x\in\Delta$, so $\mu_\Delta(M_\Delta)\subset\Delta$.
> 
> Conversely, given a point $x\in\Delta$, we can solve the equations
> $$\langle x,v_i\rangle = -\pi |z_i|^2 + \lambda_i$$
> with $|z_i|\ge0$. Since the normals $v_i$ span $\mathbb{R}^n$ and the inequalities defining $\Delta$ are consistent, this system has a solution.
> It is then easy to check that such a $z$ lies in $Z$ and projects to a point $[z]\in M_\Delta$ with $\mu_\Delta([z])=x$. Hence every point of $\Delta$ is in the image.
> 
> Thus $\mu_\Delta(M_\Delta)=\Delta$.

We have now constructed, from a Delzant polytope $\Delta$, a compact symplectic toric manifold $(M_\Delta,\omega_\Delta,T^n,\mu_\Delta)$ with moment polytope $\Delta$. This proves the **existence** part of Delzant’s theorem.

The **uniqueness** part is more subtle and relies on local normal form theorems and global gluing, but we will not pursue it here.

## 7.5 Worked examples from Delzant’s construction

We now apply the general recipe to a few fundamental examples.

### 7.5.1 The simplex and $\mathbb{C}P^n$

Let
$$\Delta_{\mathrm{simp}} = \Bigl\{x\in\mathbb{R}^n \ \Big|\ x_j\ge0,\ \sum_{j=1}^n x_j \le \lambda\Bigr\},\qquad \lambda>0.$$

This has $d=n+1$ facets:
- For $j=1,\dots,n$: $\langle x,e_j\rangle \le \lambda_j:=0$.
- One more facet: $\langle x,(-1,\dots,-1)\rangle \le -\lambda$.

Thus the normals are
$$v_1=e_1,\dots,v_n=e_n,\quad v_{n+1}=(-1,\dots,-1),$$
and $\lambda_1=\cdots=\lambda_n = 0$, $\lambda_{n+1}=-\lambda$.

The map
$$\pi : \mathbb{R}^{n+1} \to \mathbb{R}^n, \quad e_j \mapsto v_j$$
has kernel spanned by $(1,\dots,1)$, so $N\subset T^{n+1}$ is the diagonal circle.

The construction then gives:

- $Z = \mu_N^{-1}(0)\subset\mathbb{C}^{n+1}$ is a sphere of appropriate radius;
- $M_{\Delta_{\mathrm{simp}}} = Z/N \cong \mathbb{C}P^n$;
- $\mu_{\Delta_{\mathrm{simp}}}$ coincides with the standard moment map for the $T^n$-action on $\mathbb{C}P^n$ up to translation and scaling.

Thus Delzant’s construction recovers the standard toric structure on projective space.

### 7.5.2 Product of intervals and $\mathbb{C}P^1\times\mathbb{C}P^1$

Consider the rectangle
$$\Delta = [0,\lambda_1]\times[0,\lambda_2] \subset \mathbb{R}^2.$$

Its four facets have normals
$$v_1=(1,0),\ v_2=(-1,0),\ v_3=(0,1),\ v_4=(0,-1),$$
with appropriate $\lambda_i$. All Delzant conditions are obviously satisfied.

In this case, Delzant’s construction yields a symplectic toric manifold $M_\Delta$ which can be identified with
$$\mathbb{C}P^1\times\mathbb{C}P^1$$
equipped with a product symplectic form whose areas correspond to the side lengths $\lambda_1,\lambda_2$. The moment map is the product of the two standard moment maps on each factor, and the image is the rectangle $\Delta$.

### 7.5.3 Trapezoids and Hirzebruch surfaces

Take a trapezoid
$$\Delta_k = \{(x,y)\in\mathbb{R}^2 \mid 0\le x\le a,\ 0\le y\le b+kx\}$$
with integer slope $k\ge0$ and parameters $a,b>0$ chosen so that all vertices have integer coordinates and the edge directions at each vertex form a $\mathbb{Z}$-basis of $\mathbb{Z}^2$. Then $\Delta_k$ is Delzant.

Delzant’s construction then produces a symplectic toric surface $M_{\Delta_k}$, which can be identified with the Hirzebruch surface $F_k$. The combinatorics of $\Delta_k$ encode:

- the self-intersection numbers of the torus-invariant divisors;
- the fibration $F_k \to \mathbb{C}P^1$ and the degree of the ruling;
- the possible Kähler classes, via the side lengths of the trapezoid.

We will not carry out the full identification here, but the pattern is completely analogous to the rectangle and simplex cases.

## 7.6 Further directions

We finish with a few remarks situating toric manifolds in a broader context.

> [!danger] Toric manifolds as integrable systems
> For a symplectic toric manifold $(M^{2n},\omega,T^n,\mu)$,
> the components of the moment map
> $$\mu = (\mu_1,\dots,\mu_n)$$
> define a completely integrable Hamiltonian system:
> - the functions $\mu_j$ Poisson-commute;
> - their differentials are generically independent;
> - a generic fiber $\mu^{-1}(a)$ is a Lagrangian torus.
> 
> Thus the moment map is a singular Lagrangian fibration $M\to\Delta_M$. Toric manifolds are therefore basic examples in the theory of integrable systems and play a central role in symplectic topology and mirror symmetry.

> [!danger] Relation to complex and algebraic geometry
> Many symplectic toric manifolds admit compatible complex structures making them **projective toric varieties** in the sense of algebraic geometry.  
> In this setting:
> - the moment polytope is closely related to the Newton polytope of a very ample line bundle;
> - the combinatorics of $\Delta_M$ encode topological invariants (Betti numbers, intersection numbers);
> - Kähler metrics with special curvature properties (e.g. constant scalar curvature) can be studied via convex analysis on $\Delta_M$.

Later chapters may revisit toric manifolds as test cases for more advanced tools (J-holomorphic curves, Floer theory, mirror symmetry), but for the purposes of these notes, the key takeaway is:

> Symplectic toric manifolds provide a class of symplectic manifolds that are completely controlled by combinatorial data.
