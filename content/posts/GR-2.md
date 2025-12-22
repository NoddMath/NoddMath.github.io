+++
date = "2025-02-15T15:44:10-04:00"
draft = false
title = "The Lorentz Group, Observers, and Tensorial Tools"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity" ]
+++

In Lecture 1 we introduced Minkowski space $(\mathbb{R}^{1,3},\eta)$ and the causal classification of vectors.
In this lecture we study the symmetry group of $\eta$ (the Lorentz group), interpret unit timelike
vectors as **observers**, and develop the basic tensorial objects that will later generalize to curved spacetimes. We also give several computations that will be reused repeatedly (energy measured by an observer, rapidity, Doppler shift, invariants of a $2$-form).

## The Lorentz Group and Its Connected Components

> [!info] Lorentz Group and Its Components
> The **Lorentz group** is
> $$O(1,3):=\{\Lambda\in GL(4,\mathbb{R}):\ \Lambda^{T}\eta\,\Lambda=\eta\}.$$
> We define
> $$SO(1,3):=\{\Lambda\in O(1,3):\ \det\Lambda=1\},\qquad O^{+}(1,3):=\{\Lambda\in O(1,3):\ (\Lambda e_0)^0>0\},$$
> where $e_0=(1,0,0,0)$ and $(\cdot)^0$ denotes the $0$-th component. The intersection
> $$SO^{+}(1,3):=SO(1,3)\cap O^{+}(1,3)$$
> is called the **proper orthochronous Lorentz group**.

> [!abstract] Four Connected Components
> The group $O(1,3)$ has exactly four connected components, distinguished by
> $$\det\Lambda\in\{\pm1\}\quad\text{and}\quad \text{time orientation: }\ (\Lambda e_0)^0\gtrless 0.$$
> The identity component is $SO^{+}(1,3)$.

> [!success] Proof
> The maps $\Lambda\mapsto \det\Lambda$ and $\Lambda\mapsto \mathrm{sign}((\Lambda e_0)^0)$ are continuous (with codomain discrete), hence constant on connected components.
> Thus $O(1,3)$ has at least four components.
> Conversely, explicit representatives of the four combinations are given by
> $$I,\qquad \mathrm{diag}(1,-1,1,1),\qquad \mathrm{diag}(-1,1,1,1),\qquad \mathrm{diag}(-1,-1,1,1),$$
> and any $\Lambda\in O(1,3)$ can be connected within its class to one of these by a standard deformation argument (equivalently: $O(1,3)$ acts transitively on the unit hyperboloid and the stabilizer has two components).
> Hence there are exactly four components, and the one containing $I$ is $SO^{+}(1,3)$.

> [!danger] Remark
> For physics, $SO^{+}(1,3)$ is the symmetry group of special relativity once one fixes spatial orientation and a time orientation.
> For mathematics, it is the group of linear isometries of $(\mathbb{R}^{1,3},\eta)$ connected to the identity.

## Unit Timelike Vectors as Observers and the Hyperboloid Model

> [!info] Observer
> A **(future-directed) observer** is a future-directed unit timelike vector $U\in\mathbb{R}^{1,3}$, i.e.
> $$\eta(U,U)=-1,\qquad U^0>0.$$
> Geometrically, $U$ is the tangent vector (four-velocity) to an inertial worldline parameterized by proper time.

Define the **future unit hyperboloid**
$$\mathbb{H}^3:=\{U\in\mathbb{R}^{1,3}:\ \eta(U,U)=-1,\ U^0>0\}.$$
It plays a central role in organizing kinematics.

> [!abstract] Transitive Action and Isotropy
> The group $SO^{+}(1,3)$ acts transitively on $\mathbb{H}^3$. The stabilizer of $e_0$ is
> $$\mathrm{Stab}(e_0)=\left\{\begin{pmatrix}1&0\\0&R\end{pmatrix}: R\in SO(3)\right\}\cong SO(3),$$
> hence $\mathbb{H}^3\cong SO^{+}(1,3)/SO(3)$ as a homogeneous space.

> [!success] Proof
> Let $U\in\mathbb{H}^3$. By Proposition **Any Future Timelike Vector Can Be Boosted to Rest** from Lecture 1, there exists $\Lambda\in SO^{+}(1,3)$ sending $U$ to $e_0$ (equivalently, sending $e_0$ to $U$). This is transitivity.
> If $\Lambda e_0=e_0$, then the first column of $\Lambda$ is $(1,0,0,0)^T$; the defining relation $\Lambda^T\eta\Lambda=\eta$ forces the remaining $3\times 3$ block to be orthogonal with determinant $1$, so it is in $SO(3)$.
> Conversely, any block-diagonal matrix of that form preserves $\eta$ and fixes $e_0$.

> [!danger] Remark
> The induced metric on $\mathbb{H}^3$ is Riemannian and makes $\mathbb{H}^3$ into hyperbolic $3$-space.
> We will later reinterpret relative velocity and rapidity in terms of hyperbolic geometry.

## Relative Velocity and Rapidity

Fix an inertial frame (the standard coordinates on $\mathbb{R}^{1,3}$). Let $U\in\mathbb{H}^3$.
Write $U=(U^0,\mathbf{U})$ with $\mathbf{U}\in\mathbb{R}^3$. The condition $\eta(U,U)=-1$ reads
$$-(U^0)^2+|\mathbf{U}|^2=-1\quad\Longleftrightarrow\quad (U^0)^2=1+|\mathbf{U}|^2.$$
Define the **three-velocity** $\mathbf{v}$ (relative to this frame) by
$$\mathbf{v}:=\frac{\mathbf{U}}{U^0}\in\mathbb{R}^3.$$

> [!abstract] Gamma Factor and Speed Bound
> For $U\in\mathbb{H}^3$, the vector $\mathbf{v}:=\mathbf{U}/U^0$ satisfies $|\mathbf{v}|<1$ and
> $$U^0=\gamma,\qquad \mathbf{U}=\gamma \mathbf{v},\qquad \gamma=\frac{1}{\sqrt{1-|\mathbf{v}|^2}}.$$
> Conversely, any $\mathbf{v}\in\mathbb{R}^3$ with $|\mathbf{v}|<1$ determines a unique $U\in\mathbb{H}^3$ by $U=(\gamma,\gamma\mathbf{v})$.

> [!success] Proof
> From $\eta(U,U)=-1$ we get $(U^0)^2-|\mathbf{U}|^2=1$, hence $|\mathbf{U}|<U^0$ and so $|\mathbf{v}|<1$.
> Now
> $$1=(U^0)^2-|\mathbf{U}|^2=(U^0)^2\left(1-\left|\frac{\mathbf{U}}{U^0}\right|^2\right)=(U^0)^2(1-|\mathbf{v}|^2),$$
> so $U^0=(1-|\mathbf{v}|^2)^{-1/2}=\gamma$ and $\mathbf{U}=U^0\mathbf{v}=\gamma\mathbf{v}$.
> The converse is immediate by substitution.

Rapidity is the hyperbolic analogue of an angle.

> [!info] Rapidity Between Observers
> For $U,V\in\mathbb{H}^3$ define the **rapidity** $\varphi(U,V)\ge 0$ by
> $$\cosh \varphi(U,V):=-\eta(U,V).$$

> [!abstract] Rapidity Is Well-Defined and Measures Relative Motion
> For $U,V\in\mathbb{H}^3$, one has $-\eta(U,V)\ge 1$, with equality iff $U=V$.
> Hence $\cosh \varphi(U,V):=-\eta(U,V)$ defines a unique $\varphi(U,V)\ge 0$.
> Moreover, if $V=(1,0,0,0)$ is the rest observer in a frame and $U=(\gamma,\gamma \mathbf{v})$ as above, then
> $$\cosh\varphi(U,V)=\gamma,\qquad \tanh\varphi(U,V)=|\mathbf{v}|.$$

> [!success] Proof
> The inequality $-\eta(U,V)\ge 1$ is Proposition **Lorentzian Cauchy–Schwarz for Timelike Vectors** from Lecture 1 applied to unit timelike vectors.
> Taking $V=e_0$ and $U=(\gamma,\gamma\mathbf{v})$ gives
> $$-\eta(U,e_0)=\gamma.$$
> Set $\cosh\varphi=\gamma$. Then $\sinh^2\varphi=\cosh^2\varphi-1=\gamma^2-1=\frac{1}{1-|\mathbf{v}|^2}-1=\frac{|\mathbf{v}|^2}{1-|\mathbf{v}|^2}$, hence
> $$\tanh\varphi=\frac{\sinh\varphi}{\cosh\varphi}=\frac{|\mathbf{v}|}{1}=|\mathbf{v}|.$$

> [!danger] Remark
> The identity $-\eta(U,V)=\cosh\varphi$ should be compared with Euclidean geometry where $\langle u,v\rangle=\cos\theta$ for unit vectors.
> Here $\varphi$ plays the role of a hyperbolic angle.

## Boosts Revisited and a Useful Decomposition

We now repackage the standard boost in a coordinate-free form.

> [!abstract] Boost Determined by an Observer
> Let $U\in\mathbb{H}^3$. There exists $B_U\in SO^{+}(1,3)$ such that $B_U e_0=U$ and $B_U$ acts as the identity on the orthogonal complement of $\mathrm{span}\{e_0,U\}$ (interpreting this complement as a Euclidean $2$-plane when $U\neq \pm e_0$).
> In coordinates where $U=(\gamma,\gamma v,0,0)$, the matrix of $B_U$ is exactly the standard boost matrix from Lecture 1 in rapidity form with $\cosh\varphi=\gamma$, $\sinh\varphi=\gamma v$.

> [!success] Proof
> If $U=e_0$ take $B_U=I$. Otherwise the plane $\Pi:=\mathrm{span}\{e_0,U\}$ is Lorentzian $2$-dimensional.
> Choose an $\eta$-orthonormal basis $\{E_0,E_1\}$ for $\Pi$ with $E_0=e_0$ future-directed timelike and $E_1$ spacelike.
> Then $U=\cosh\varphi\,E_0+\sinh\varphi\,E_1$ for a unique $\varphi>0$.
> Define $B_U$ on $\Pi$ by the hyperbolic rotation
> $$B_U(E_0)=\cosh\varphi\,E_0+\sinh\varphi\,E_1,\qquad B_U(E_1)=\sinh\varphi\,E_0+\cosh\varphi\,E_1,$$
> and set $B_U=\mathrm{id}$ on $\Pi^\perp$ (which is Euclidean by Proposition **Orthogonal Complements** from Lecture 1).
> One checks immediately that $B_U$ preserves $\eta$, lies in $SO^{+}(1,3)$, and sends $e_0$ to $U$.
> In the special coordinate choice $U=(\gamma,\gamma v,0,0)$ the above is the standard boost matrix.

> [!abstract] Rotation–Boost Decomposition
> Every $\Lambda\in SO^{+}(1,3)$ can be written as
> $$\Lambda = R\circ B_U$$
> for some $U\in\mathbb{H}^3$ and some spatial rotation $R=\mathrm{diag}(1,\widetilde R)$ with $\widetilde R\in SO(3)$.

> [!success] Proof
> Let $U:=\Lambda e_0\in\mathbb{H}^3$.
> Choose $B_U\in SO^{+}(1,3)$ with $B_U e_0=U$ from Proposition **Boost Determined by an Observer**.
> Then $B_U^{-1}\Lambda$ fixes $e_0$, hence lies in the stabilizer of $e_0$, which is $\{\mathrm{diag}(1,\widetilde R):\widetilde R\in SO(3)\}$ by Proposition **Transitive Action and Isotropy**.
> Set $R:=B_U^{-1}\Lambda$ and rearrange to get $\Lambda=R^{-1}B_U$ (rename $R^{-1}$ by $R$).

> [!danger] Remark
> This decomposition captures a core principle: Lorentz transformations are generated by **spatial rotations** (acting within an observer's simultaneity space $U^\perp$) and **boosts** (changing the observer).
> A more symmetric $RBR$ decomposition is also possible and will appear again when we study Cartan decompositions and the Lie algebra $\mathfrak{so}(1,3)$.

## Four-Momentum and Energy Measured by an Observer

> [!info] Four-Momentum and Invariant Mass
> A **four-momentum** is a vector $P\in\mathbb{R}^{1,3}$.
> If $P$ is future-directed timelike, its **invariant mass** is defined by
> $$m:=\sqrt{-\eta(P,P)}.$$
> If $P$ is null, we set $m=0$.

> [!info] Energy and Spatial Momentum Measured by an Observer
> Let $U\in\mathbb{H}^3$ be an observer and $P$ a future-directed causal four-momentum.
> Define the **energy measured by $U$** to be
> $$E_U(P):=-\eta(P,U),$$
> and define the **spatial momentum measured by $U$** to be the $U^\perp$-projection
> $$\mathbf{p}_U(P):=P+ \eta(P,U)\,U = P - E_U(P)\,U,$$
> which satisfies $\eta(\mathbf{p}_U(P),U)=0$.

> [!abstract] Energy–Mass Inequality and Decomposition
> Let $P$ be future-directed timelike with invariant mass $m>0$, and let $U\in\mathbb{H}^3$.
> Then
> $$E_U(P)\ge m,$$
> with equality iff $P=mU$. Moreover, one has the identity
> $$E_U(P)^2 - \eta(\mathbf{p}_U(P),\mathbf{p}_U(P)) = m^2.$$

> [!success] Proof
> Apply Proposition **Lorentzian Cauchy–Schwarz for Timelike Vectors** (Lecture 1) to timelike future-directed vectors $P$ and $U$:
> $$-\eta(P,U)\ge \sqrt{-\eta(P,P)}\sqrt{-\eta(U,U)}=m\cdot 1=m,$$
> with equality iff $P$ is a positive multiple of $U$, and the multiple must be $m$ by the definition $m=\sqrt{-\eta(P,P)}$.
> For the identity, write $P = -\eta(P,U)\,U + \mathbf{p}_U(P)=E_U(P)\,U+\mathbf{p}_U(P)$ using the definition of $\mathbf{p}_U(P)$.
> Then
> $$\eta(P,P)=\eta(E_U U+\mathbf{p}_U, E_U U+\mathbf{p}_U)=E_U^2\,\eta(U,U)+2E_U\,\eta(U,\mathbf{p}_U)+\eta(\mathbf{p}_U,\mathbf{p}_U)=-E_U^2+\eta(\mathbf{p}_U,\mathbf{p}_U),$$
> since $\eta(U,U)=-1$ and $\eta(U,\mathbf{p}_U)=0$.
> Thus $-m^2=\eta(P,P)=-E_U^2+\eta(\mathbf{p}_U,\mathbf{p}_U)$, which rearranges to the claimed relation.

> [!danger] Remark
> In the rest frame of $U=e_0$, one has $E_{e_0}(P)=P^0$ and $\mathbf{p}_{e_0}(P)=(0,P^1,P^2,P^3)$, so the relation becomes
> $$(P^0)^2-|\mathbf{P}|^2=m^2.$$
> The observer-dependent splitting $P=E_U U+\mathbf{p}_U$ is the prototype for $3+1$ decompositions in curved spacetime.

## Null Vectors and Doppler Shift

A future-directed null vector $K$ may be thought of as the wave-vector of a light ray (or a photon momentum), and its frequency depends on the observer.

> [!info] Frequency Measured by an Observer
> Let $K$ be future-directed null. For an observer $U\in\mathbb{H}^3$ define
> $$\omega_U(K):=-\eta(K,U).$$

> [!abstract] Doppler Factor for a Boost
> Fix the standard inertial frame and write a future-directed null vector as
> $$K=\omega(1,\mathbf{n}),\qquad \omega>0,\quad |\mathbf{n}|=1.$$
> Let $U=(\gamma,\gamma \mathbf{v})\in\mathbb{H}^3$ be an observer with $|\mathbf{v}|<1$.
> Then the frequency measured by $U$ is
> $$\omega_U(K)=\gamma\omega\,(1-\mathbf{v}\cdot \mathbf{n}).$$
> In particular, for motion along the propagation direction ($\mathbf{v}\parallel \mathbf{n}$),
> $$\omega_U(K)=\omega\,\sqrt{\frac{1-|\mathbf{v}|}{1+|\mathbf{v}|}}\quad\text{(receding)},\qquad \omega_U(K)=\omega\,\sqrt{\frac{1+|\mathbf{v}|}{1-|\mathbf{v}|}}\quad\text{(approaching)}.$$

> [!success] Proof
> Using $U=(\gamma,\gamma\mathbf{v})$ and $K=\omega(1,\mathbf{n})$,
> $$\eta(K,U)=\eta(\omega(1,\mathbf{n}),(\gamma,\gamma\mathbf{v}))=-\omega\gamma+\omega\gamma\,\mathbf{n}\cdot\mathbf{v}=-\gamma\omega(1-\mathbf{v}\cdot\mathbf{n}),$$
> so $\omega_U(K)=-\eta(K,U)$ gives the formula.
> If $\mathbf{v}\cdot\mathbf{n}=\pm|\mathbf{v}|$, then $\gamma(1\mp|\mathbf{v}|)=\sqrt{(1\mp|\mathbf{v}|)^2/(1-|\mathbf{v}|^2)}=\sqrt{(1\mp|\mathbf{v}|)/(1\pm|\mathbf{v}|)}$, yielding the stated special cases.

> [!danger] Remark
> The simple invariant formula $\omega_U(K)=-\eta(K,U)$ is the correct general-relativistic definition as well:
> in curved spacetime it becomes $\omega_U(K)=-g(K,U)$ along a null geodesic, leading to gravitational redshift.

## Tensors in Minkowski Space: Raising/Lowering and the Volume Form

We now emphasize the tensorial viewpoint: Lorentz transformations act on all tensor types, not just vectors.

> [!info] Musical Isomorphisms in Minkowski Space
> The metric $\eta$ identifies vectors and covectors via
> $$v^\flat:=\eta(v,\cdot)\in(\mathbb{R}^{1,3})^*,\qquad \alpha^\sharp\in\mathbb{R}^{1,3}\ \text{defined by}\ \eta(\alpha^\sharp,\cdot)=\alpha.$$
> In coordinates, $v_\mu=\eta_{\mu\nu}v^\nu$ and $\alpha^\mu=\eta^{\mu\nu}\alpha_\nu$ with $(\eta^{\mu\nu})=\mathrm{diag}(-1,1,1,1)$.

> [!info] Lorentz Action on Tensors
> Let $\Lambda\in O(1,3)$. The induced action on covectors is
> $$(\Lambda\cdot \alpha)(v):=\alpha(\Lambda^{-1}v),$$
> and on general $(k,\ell)$-tensors $T$ by
> $$(\Lambda\cdot T)(\alpha_1,\dots,\alpha_k,v_1,\dots,v_\ell):=T(\Lambda^{-1}\cdot\alpha_1,\dots,\Lambda^{-1}\cdot\alpha_k,\Lambda^{-1}v_1,\dots,\Lambda^{-1}v_\ell).$$
> In coordinates this yields the usual transformation law with $\Lambda$ and $\Lambda^{-1}$.

> [!abstract] Invariance of Contractions
> If $T$ is a tensor built by contracting indices using $\eta$ (e.g. $\eta(v,v)$, $\eta^{\mu\nu}T_{\mu\nu}$, $F_{\mu\nu}F^{\mu\nu}$), then $T$ is invariant under the Lorentz action of $O(1,3)$.

> [!success] Proof
> All such expressions are compositions of the tensorial action with the $O(1,3)$-invariance of $\eta$, i.e. $\Lambda^T\eta\Lambda=\eta$, which precisely guarantees that raising/lowering and contraction commute with the action.

> [!info] Levi-Civita Symbol and Volume Form
> Let $\varepsilon_{\mu\nu\rho\sigma}$ be the totally antisymmetric symbol with $\varepsilon_{0123}=+1$.
> The associated $4$-form
> $$\mathrm{vol}_\eta:=dx^0\wedge dx^1\wedge dx^2\wedge dx^3$$
> is the standard volume form on $\mathbb{R}^{4}$.
> For $\Lambda\in SO^{+}(1,3)$, one has $\Lambda^*\mathrm{vol}_\eta=\mathrm{vol}_\eta$.

> [!success] Proof
> For any linear map $\Lambda$, $\Lambda^*(dx^0\wedge\cdots\wedge dx^3)=(\det\Lambda)\,dx^0\wedge\cdots\wedge dx^3$.
> If $\Lambda\in SO^{+}(1,3)$ then $\det\Lambda=1$, hence invariance.

## A Fundamental Example: a $2$-Form and Its Lorentz Invariants

A key recurring tensor in relativity is a $2$-form $F$ (the electromagnetic field is the motivating example),
and its invariant scalars under Lorentz transformations.

> [!info] Hodge Star on $(\mathbb{R}^{1,3},\eta)$
> For $k$-forms $\alpha,\beta$, define the Hodge star $\star:\Lambda^k(\mathbb{R}^{1,3})^*\to\Lambda^{4-k}(\mathbb{R}^{1,3})^*$ by the requirement
> $$\alpha\wedge \star\beta = \langle \alpha,\beta\rangle_\eta\, \mathrm{vol}_\eta,$$
> where $\langle\cdot,\cdot\rangle_\eta$ is the inner product on $k$-forms induced by $\eta$.

> [!danger] Remark
> Because $\eta$ has Lorentzian signature, $\star^2$ acts with a sign that differs from the Riemannian case.
> On $2$-forms in signature $(-,+,+,+)$ one has $\star^2=-\mathrm{id}$.
> We will revisit this in the semi-Riemannian setting later.

> [!info] Electric and Magnetic 1-Forms Measured by an Observer
> Fix an observer $U\in\mathbb{H}^3$ and let $F$ be a $2$-form. Define the **electric** and **magnetic** $1$-forms measured by $U$:
> $$E:=\iota_U F,\qquad B:=\iota_U(\star F),$$
> i.e. $E_a=F_{ab}U^b$ and $B_a=(\star F)_{ab}U^b$.

> [!abstract] Measured Fields Are Spatial
> For $E$ and $B$ defined by $E:=\iota_U F$ and $B:=\iota_U(\star F)$, one has
> $$E(U)=0,\qquad B(U)=0.$$
> Equivalently, the vectors $E^\sharp$ and $B^\sharp$ lie in the Euclidean space $U^\perp$.

> [!success] Proof
> Since $F$ is antisymmetric,
> $$E(U)=E_a U^a = F_{ab}U^bU^a = 0.$$
> Likewise $(\star F)$ is also antisymmetric, so
> $$B(U)= (\star F)_{ab}U^bU^a=0.$$

In the rest frame of $U=e_0$, write $F$ in components as
$$F=\sum_{i=1}^3 E_i\,dx^0\wedge dx^i + \sum_{1\le i<j\le 3} F_{ij}\,dx^i\wedge dx^j,$$
and define $B$ by $F_{ij}=\epsilon_{ijk}B_k$ (with $\epsilon_{123}=+1$).
Then $E=(0,E_1,E_2,E_3)$ and $B=(0,B_1,B_2,B_3)$ are spatial.

> [!abstract] Two Lorentz Invariants of a $2$-Form
> Let $F$ be a $2$-form. The scalars
> $$I_1:=F_{\mu\nu}F^{\mu\nu},\qquad I_2:=F_{\mu\nu}(\star F)^{\mu\nu}$$
> are invariant under $SO^{+}(1,3)$. In the rest frame of an observer $U=e_0$ with the decomposition above,
> $$I_1=2\big(|\mathbf{B}|^2-|\mathbf{E}|^2\big),\qquad I_2=-4\,\mathbf{E}\cdot\mathbf{B}.$$

> [!success] Proof
> Invariance follows from Proposition **Invariance of Contractions** together with the fact that $\star$ is defined using $\eta$ and $\mathrm{vol}_\eta$, both preserved by $SO^{+}(1,3)$.
> To compute the rest-frame formulas, note that raising indices gives $F^{0i}=-F_{0i}=-E_i$ and $F^{ij}=F_{ij}=\epsilon_{ijk}B_k$.
> Hence
> $$F_{\mu\nu}F^{\mu\nu}=2\sum_{i=1}^3 F_{0i}F^{0i}+\sum_{i,j=1}^3 F_{ij}F^{ij}=2\sum_i E_i(-E_i)+\sum_{i,j}(\epsilon_{ijk}B_k)(\epsilon_{ij\ell}B_\ell).$$
> Using $\sum_{i,j}\epsilon_{ijk}\epsilon_{ij\ell}=2\delta_{k\ell}$ yields
> $$F_{\mu\nu}F^{\mu\nu}=-2|\mathbf{E}|^2+2|\mathbf{B}|^2=2(|\mathbf{B}|^2-|\mathbf{E}|^2).$$
> For $I_2$, in the same rest frame one checks (e.g. from the defining identity of $\star$) that
> $$(\star F)_{0i}=B_i,\qquad (\star F)_{ij}=-\epsilon_{ijk}E_k,$$
> so $(\star F)^{0i}=-(\star F)_{0i}=-B_i$ and $(\star F)^{ij}=(\star F)_{ij}=-\epsilon_{ijk}E_k$.
> Then
> $$F_{\mu\nu}(\star F)^{\mu\nu}=2\sum_i F_{0i}(\star F)^{0i}+\sum_{i,j}F_{ij}(\star F)^{ij}=2\sum_i E_i(-B_i)+\sum_{i,j}(\epsilon_{ijk}B_k)(-\epsilon_{ij\ell}E_\ell).$$
> Again $\sum_{i,j}\epsilon_{ijk}\epsilon_{ij\ell}=2\delta_{k\ell}$ gives
> $$I_2=-2\,\mathbf{E}\cdot\mathbf{B}-2\,\mathbf{B}\cdot\mathbf{E}=-4\,\mathbf{E}\cdot\mathbf{B}.$$

> [!danger] Remark
> The pair $(I_1,I_2)$ classifies $F$ up to Lorentz transformations in a strong sense (with additional discrete data):
> for instance, $I_2=0$ and $I_1>0$ corresponds to a purely magnetic field in some frame, while $I_2=0$ and $I_1<0$ corresponds to a purely electric field in some frame.
> This philosophy—extract invariant scalars from tensors—will reappear constantly in GR (e.g. curvature invariants).

## Outlook

We have now identified three recurring patterns:
1. **Observer dependence via $U$**: energy, momentum, and fields split naturally into time and space using the orthogonal decomposition $\mathbb{R}^{1,3}=\mathrm{span}\{U\}\oplus U^\perp$.
2. **Invariance via $\eta$**: physically meaningful scalars arise by contracting indices using the metric and, when appropriate, the Hodge star.
3. **Hyperbolic geometry behind kinematics**: relative motion is encoded by rapidity and the hyperboloid $\mathbb{H}^3$.

In the next lecture we will introduce variational principles and Noether-type arguments in a form adapted to spacetime geometry, which will later generalize naturally to curved spacetimes.
