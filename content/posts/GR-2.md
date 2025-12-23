+++
date = "2025-02-15T15:44:10-04:00"
draft = false
title = "Lorentz Transformations, Observers, and Tensorial Data in Flat Spacetime"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

Lecture 1 built the flat model: Minkowski space $(\mathbb{R}^{1,3},\eta)$, the light cone, and the proper-time functional. Today we zoom in on a theme that will keep reappearing once the metric becomes curved:

**Some quantities are intrinsically geometric (observer-independent), while many physically meaningful quantities are measurements made by an observer (observer-dependent).**

The Lorentz group organizes this distinction. It is the symmetry group of $\eta$, hence the symmetry group of proper time and the causal structure. Once we agree that an **observer** is a future-directed unit timelike vector, we can turn measurements into clean contractions: energy, frequency, and the electric/magnetic splitting of a $2$-form are all obtained by pairing tensors with the observer.

Throughout, keep two questions in mind:

1. What changes when we change observers?
2. What can be extracted as a scalar invariant by contracting indices with $\eta$ (and sometimes with the Hodge star)?

## The Lorentz Group and Its Connected Components

A change of inertial coordinates in special relativity should preserve the squared interval and the light cone. In Minkowski space this is equivalent to preserving the Lorentzian inner product $\eta$.

> [!info] Lorentz Group and Standard Subgroups
> The **Lorentz group** is
> $$O(1,3):=\{\Lambda\in GL(4,\mathbb{R}) : \Lambda^{T}\eta\,\Lambda=\eta\}.$$
> We define
> $$SO(1,3):=\{\Lambda\in O(1,3): \det\Lambda=1\},\quad O^{+}(1,3):=\{\Lambda\in O(1,3): (\Lambda e_0)^0>0\},$$
> where $e_0=(1,0,0,0)$ and $(\cdot)^0$ denotes the $0$-th component in the standard coordinates.
> The intersection
> $$SO^{+}(1,3):=SO(1,3)\cap O^{+}(1,3)$$
> is called the **proper orthochronous Lorentz group**.

> [!danger] Remark
> The condition $(\Lambda e_0)^0>0$ means that $\Lambda$ preserves the chosen time orientation: it sends a future-directed timelike vector to a future-directed timelike vector. For physics, $SO^{+}(1,3)$ is the symmetry group of special relativity once we decide not to flip time and not to reverse spatial orientation.

> [!abstract] Four Connected Components
> The group $O(1,3)$ has exactly four connected components, distinguished by
> $$\det\Lambda\in\{\pm 1\}\quad\text{and}\quad \mathrm{sign}\big((\Lambda e_0)^0\big)\in\{\pm 1\}.$$
> The identity component is $SO^{+}(1,3)$.

> [!success] Proof
> The maps $\Lambda\mapsto\det\Lambda$ and $\Lambda\mapsto \mathrm{sign}((\Lambda e_0)^0)$ are continuous with discrete codomain, hence constant on connected components. Therefore $O(1,3)$ has at least four connected components.
>
> To see there are no more, note first that $\Lambda e_0$ is a unit timelike vector because
> $$\eta(\Lambda e_0,\Lambda e_0)=\eta(e_0,e_0)=-1.$$
> Thus $(\Lambda e_0)^0\neq 0$, so the sign is well-defined. The four combinations are realized, for instance, by
> $$I,\quad \mathrm{diag}(1,-1,1,1),\quad \mathrm{diag}(-1,1,1,1),\quad \mathrm{diag}(-1,-1,1,1).$$
> It remains to see that any $\Lambda\in O(1,3)$ can be connected within its class (fixed determinant and fixed time-orientation sign) to the corresponding representative. One way is to use transitivity on the unit hyperboloid (proved below): first connect $\Lambda$ to a transformation sending $e_0$ to $\pm e_0$ (according to the time-orientation class), and then observe that the stabilizer of $e_0$ has exactly two components (determinant $\pm 1$), so we can deform within the appropriate stabilizer component to reach the diagonal representative. Hence exactly four components occur, with the identity component $SO^{+}(1,3)$.

> [!danger] Parity and Time Reversal
> The disconnected components correspond, morally, to spatial parity reversal ($\det=-1$) and time reversal (flipping the time orientation). Nothing in pure linear algebra forbids them, but many physical discussions fix an orientation and a time orientation and therefore work inside $SO^{+}(1,3)$.

## Observers and the Hyperboloid Model

The slogan “an observer is a timelike direction” becomes precise as follows.

> [!info] Observer
> A **(future-directed) observer** is a future-directed unit timelike vector $U\in\mathbb{R}^{1,3}$:
> $$\eta(U,U)=-1,\quad U^0>0.$$
> Geometrically, $U$ is the tangent vector (four-velocity) to an inertial worldline parameterized by proper time.

The set of all observers is the **future unit hyperboloid**
$$\mathbb{H}^3:=\{U\in\mathbb{R}^{1,3}: \eta(U,U)=-1,\ U^0>0\}.$$
Even before we introduce curvature, this space already organizes kinematics: changing observers means moving along $\mathbb{H}^3$.

> [!abstract] Tangent Space and Induced Metric
> For $U\in\mathbb{H}^3$, the tangent space is
> $$T_U\mathbb{H}^3=\{W\in\mathbb{R}^{1,3}:\eta(W,U)=0\}=U^\perp.$$
> Moreover, the restriction $\eta|_{U^\perp}$ is positive definite, hence defines a Riemannian metric on $\mathbb{H}^3$.

> [!success] Proof
> Differentiate the defining equation $\eta(U,U)=-1$ along a curve $U(\lambda)\in\mathbb{H}^3$:
> $$0=\frac{d}{d\lambda}\eta(U(\lambda),U(\lambda))\big|_{\lambda=0}=2\eta(\dot U(0),U),$$
> so $\dot U(0)\in U^\perp$ and thus $T_U\mathbb{H}^3\subset U^\perp$. Conversely, if $W\in U^\perp$, then the curve
> $$U(\lambda)=\frac{U+\lambda W}{\sqrt{-\eta(U+\lambda W,U+\lambda W)}}$$
> lies in $\mathbb{H}^3$ for $|\lambda|$ small and has $\dot U(0)=W$, so $U^\perp\subset T_U\mathbb{H}^3$.
>
> Positive definiteness of $\eta|_{U^\perp}$ is the timelike case of the orthogonal-complement classification from Lecture 1: if $U$ is unit timelike, then $U^\perp$ is Euclidean.

> [!abstract] Transitive Action and Isotropy
> The group $SO^{+}(1,3)$ acts transitively on $\mathbb{H}^3$. The stabilizer of $e_0$ is
> $$\mathrm{Stab}(e_0)=\left\{\begin{pmatrix}1&0\\0&R\end{pmatrix}: R\in SO(3)\right\}\cong SO(3),$$
> hence $\mathbb{H}^3\cong SO^{+}(1,3)/SO(3)$ as a homogeneous space.

> [!success] Proof
> Let $U\in\mathbb{H}^3$. We will explicitly build a Lorentz transformation sending $e_0$ to $U$ (a “boost to the observer $U$”). Such a boost exists for every future-directed timelike vector; a construction is given in the next subsection. Hence the action is transitive.
>
> If $\Lambda e_0=e_0$, then the first column of $\Lambda$ equals $e_0$. The relation $\Lambda^T\eta\Lambda=\eta$ forces the remaining $3\times 3$ block to be orthogonal; the condition $\det\Lambda=1$ forces it into $SO(3)$. Conversely, any block-diagonal matrix $\mathrm{diag}(1,R)$ with $R\in SO(3)$ clearly preserves $\eta$ and fixes $e_0$.

> [!danger] Why Hyperbolic Geometry Appears
> The induced Riemannian metric on $\mathbb{H}^3$ makes it into hyperbolic $3$-space (constant sectional curvature $-1$). You do not need the full hyperbolic geometry apparatus right now, but you should remember the moral: **relative motion is measured by hyperbolic distance on the observer hyperboloid**. This becomes a remarkably clean organizing principle later, especially when we interpret rapidity as geodesic distance.

## Relative Velocity and Rapidity

If you already know special relativity, you have seen formulas such as $U=(\gamma,\gamma\mathbf{v})$. Here we derive that decomposition from the observer viewpoint and make clear what is observer-dependent.

Fix two observers $U,V\in\mathbb{H}^3$. We want to describe the motion of $U$ as measured by $V$.

> [!abstract] Observer-Dependent Decomposition and Relative Velocity
> Let $U,V\in\mathbb{H}^3$ and set
> $$\gamma(U,V):=-\eta(U,V)\ \ge 1.$$
> Define
> $$\mathbf{v}_{V}(U):=\frac{1}{\gamma(U,V)}\,U - V \ \in V^\perp.$$
> Then
> $$U=\gamma(U,V)\big(V+\mathbf{v}_{V}(U)\big),$$
> and $\mathbf{v}_{V}(U)$ satisfies $0\le \eta(\mathbf{v}_{V}(U),\mathbf{v}_{V}(U))<1$.
> If we interpret $V^\perp$ as the Euclidean rest space of $V$ with inner product $\eta|_{V^\perp}$, then
> $$|\mathbf{v}_{V}(U)|:=\sqrt{\eta(\mathbf{v}_{V}(U),\mathbf{v}_{V}(U))}\in[0,1)$$
> is the **speed of $U$ measured by $V$**.

> [!success] Proof
> First, since $V$ is unit timelike, $\eta(U,V)\le -1$ by the Lorentzian Cauchy–Schwarz inequality, so $\gamma(U,V)\ge 1$. Compute
> $$\eta\!\left(\mathbf{v}_{V}(U),V\right)=\eta\!\left(\frac{1}{\gamma}U - V, V\right)=\frac{1}{\gamma}\eta(U,V)-\eta(V,V)=\frac{1}{\gamma}(-\gamma)-(-1)=0,$$
> so $\mathbf{v}_{V}(U)\in V^\perp$. The identity $U=\gamma(V+\mathbf{v}_{V}(U))$ is immediate from the definition.
>
> Finally,
> $$\eta(U,U)=-1=\gamma^2\,\eta\big(V+\mathbf{v},V+\mathbf{v}\big)=\gamma^2\big(\eta(V,V)+2\eta(V,\mathbf{v})+\eta(\mathbf{v},\mathbf{v})\big)=\gamma^2\big(-1+\eta(\mathbf{v},\mathbf{v})\big),$$
> so $\eta(\mathbf{v},\mathbf{v})=1-\gamma^{-2}\in[0,1)$.

> [!danger] Remark
> The formula above is the cleanest way to remember what “three-velocity” means. It is not a component of a four-vector; it is a spatial vector living in **the observer’s rest space** $V^\perp$. This is why velocity addition is not linear: you are comparing vectors that live in different Euclidean spaces.

Rapidity packages the same information in a way that is additive under composition of boosts.

> [!info] Rapidity Between Observers
> For $U,V\in\mathbb{H}^3$ define the **rapidity** $\varphi(U,V)\ge 0$ by
> $$\cosh\varphi(U,V):=-\eta(U,V)=\gamma(U,V).$$

> [!abstract] Rapidity Measures Relative Speed
> With $U,V\in\mathbb{H}^3$ as above,
> $$|\mathbf{v}_{V}(U)|=\tanh\varphi(U,V).$$
> In particular, $\varphi(U,V)=0$ iff $U=V$.

> [!success] Proof
> From the previous proposition,
> $$|\mathbf{v}_{V}(U)|^2=\eta(\mathbf{v}_{V}(U),\mathbf{v}_{V}(U))=1-\frac{1}{\gamma(U,V)^2}=1-\frac{1}{\cosh^2\varphi}=\tanh^2\varphi.$$

> [!danger] Hyperbolic Angle
> For Euclidean unit vectors $u,v$, the inner product $\langle u,v\rangle=\cos\theta$ encodes the angle $\theta$. For timelike unit vectors in Minkowski space, the invariant quantity is $-\eta(U,V)=\cosh\varphi$. Rapidity $\varphi$ is literally the hyperbolic analogue of an angle.

## Boosts, Rest Frames, and a Decomposition of $SO^{+}(1,3)$

A boost is, geometrically, the transformation that changes which observer is at rest while leaving orthogonal directions unchanged. This subsection makes that idea precise.

> [!abstract] Boost Determined by an Observer
> Let $U\in\mathbb{H}^3$. There exists $B_U\in SO^{+}(1,3)$ such that $B_U e_0=U$ and $B_U$ acts as the identity on $(\mathrm{span}\{e_0,U\})^\perp$. Moreover, on the Lorentzian plane $\Pi=\mathrm{span}\{e_0,U\}$, the restriction of $B_U$ is a hyperbolic rotation by the rapidity $\varphi(U,e_0)$.

> [!success] Proof
> If $U=e_0$, take $B_U=I$. Otherwise, let $\Pi=\mathrm{span}\{e_0,U\}$. This is a $2$-dimensional Lorentzian subspace. Choose an $\eta$-orthonormal basis $\{E_0,E_1\}$ of $\Pi$ with $E_0=e_0$ future-directed timelike and $E_1$ spacelike. Then $U=\cosh\varphi\,E_0+\sinh\varphi\,E_1$ for a unique $\varphi>0$.
>
> Define $B_U$ on $\Pi$ by
> $$B_U(E_0)=\cosh\varphi\,E_0+\sinh\varphi\,E_1,\quad B_U(E_1)=\sinh\varphi\,E_0+\cosh\varphi\,E_1,$$
> and extend by the identity on $\Pi^\perp$. Since $\Pi^\perp$ is Euclidean and orthogonal to $\Pi$, this extension preserves $\eta$ on all of $\mathbb{R}^{1,3}$. It preserves orientations and time orientation by construction, hence lies in $SO^{+}(1,3)$, and clearly sends $e_0$ to $U$.

> [!danger] Remark
> If you prefer coordinates, choose a frame where $U=(\gamma,\gamma v,0,0)$. Then the above construction reproduces the standard $x^1$-boost matrix with $\gamma=\cosh\varphi$ and $\gamma v=\sinh\varphi$. The point of the coordinate-free statement is that boosts are attached to observers, not to coordinate formulas.

> [!abstract] Rotation–Boost Decomposition
> Every $\Lambda\in SO^{+}(1,3)$ can be written as
> $$\Lambda = R\circ B_U$$
> for some observer $U\in\mathbb{H}^3$ and some spatial rotation $R=\mathrm{diag}(1,\widetilde R)$ with $\widetilde R\in SO(3)$.

> [!success] Proof
> Let $U:=\Lambda e_0\in\mathbb{H}^3$. Choose $B_U\in SO^{+}(1,3)$ with $B_U e_0=U$. Then $B_U^{-1}\Lambda$ fixes $e_0$, hence lies in $\mathrm{Stab}(e_0)\cong SO(3)$, so it has the form $\mathrm{diag}(1,\widetilde R)$. Write $B_U^{-1}\Lambda=R$ and rearrange.

## A Quick Look at the Lie Algebra

It is often useful (and conceptually clarifying) to understand Lorentz transformations infinitesimally. This becomes indispensable later when we discuss Killing fields on curved spacetimes.

> [!info] Lorentz Lie Algebra
> The Lie algebra $\mathfrak{so}(1,3)$ consists of matrices $A\in M_{4\times 4}(\mathbb{R})$ satisfying
> $$A^{T}\eta+\eta A=0.$$

> [!abstract] Block Form and Interpretation
> A matrix $A$ lies in $\mathfrak{so}(1,3)$ iff it has the block form
> $$A=\begin{pmatrix}0 & \mathbf{b}^{T}\\ \mathbf{b} & \Omega\end{pmatrix}\quad\text{with}\quad \mathbf{b}\in\mathbb{R}^{3},\ \ \Omega\in\mathfrak{so}(3).$$
> The $\Omega$ part generates spatial rotations, and the $\mathbf{b}$ part generates boosts.

> [!success] Proof
> Write $A=\begin{pmatrix}a & \mathbf{u}^{T}\\ \mathbf{v} & M\end{pmatrix}$ with $a\in\mathbb{R}$, $\mathbf{u},\mathbf{v}\in\mathbb{R}^3$, $M\in M_{3\times 3}$. Compute $A^{T}\eta+\eta A=0$ using $\eta=\mathrm{diag}(-1,1,1,1)$. The $(0,0)$ entry gives $-2a=0$, hence $a=0$. The $(0,i)$ and $(i,0)$ entries give $\mathbf{u}=\mathbf{v}$. The spatial block gives $M^{T}+M=0$, hence $M\in\mathfrak{so}(3)$.

> [!danger] Remark
> This block decomposition is the infinitesimal version of the rotation–boost factorization: rotations preserve a given observer $e_0$, while boosts change the observer.

## Four-Momentum, Energy, and the Observer-Dependent Splitting

We now treat a foundational example of the “observer + contraction” philosophy. A future-directed timelike vector can be regarded as four-momentum; its invariant norm is the rest mass. Different observers decompose the same four-momentum into different energy and spatial momentum.

> [!info] Four-Momentum and Invariant Mass
> A **four-momentum** is a vector $P\in\mathbb{R}^{1,3}$. If $P$ is future-directed timelike, its **invariant mass** is
> $$m:=\sqrt{-\eta(P,P)}.$$
> If $P$ is future-directed null, we set $m=0$.

> [!info] Energy and Spatial Momentum Measured by an Observer
> Let $U\in\mathbb{H}^3$ be an observer and let $P$ be a future-directed causal four-momentum. Define the **energy measured by $U$** by
> $$E_U(P):=-\eta(P,U),$$
> and define the **spatial momentum measured by $U$** by
> $$\mathbf{p}_U(P):=P+ \eta(P,U)\,U = P - E_U(P)\,U.$$
> Then $\mathbf{p}_U(P)\in U^\perp$.

> [!abstract] Energy Is Positive and Dominates Rest Mass
> Let $P$ be future-directed timelike with invariant mass $m>0$, and let $U\in\mathbb{H}^3$. Then
> $$E_U(P)\ge m,$$
> with equality iff $P=mU$.

> [!success] Proof
> Apply the Lorentzian Cauchy–Schwarz inequality to the future-directed timelike vectors $P$ and $U$:
> $$-\eta(P,U)\ge \sqrt{-\eta(P,P)}\sqrt{-\eta(U,U)}=m\cdot 1=m.$$
> Equality holds iff $P$ is a positive multiple of $U$; that multiple must be $m$ because $\sqrt{-\eta(P,P)}=m$.

> [!abstract] Mass Shell Identity in Observer Language
> With $P,m,U$ as above, one has
> $$E_U(P)^2-\eta\big(\mathbf{p}_U(P),\mathbf{p}_U(P)\big)=m^2.$$

> [!success] Proof
> Decompose $P=E_U(P)\,U+\mathbf{p}_U(P)$. Then
> $$\eta(P,P)=E_U(P)^2\eta(U,U)+2E_U(P)\eta(U,\mathbf{p}_U(P))+\eta(\mathbf{p}_U(P),\mathbf{p}_U(P))=-E_U(P)^2+\eta(\mathbf{p}_U(P),\mathbf{p}_U(P)),$$
> since $\eta(U,U)=-1$ and $\eta(U,\mathbf{p}_U(P))=0$. But $\eta(P,P)=-m^2$, so rearranging yields the identity.

> [!danger] Remark
> In the rest frame of $U=e_0$, this becomes the familiar relation $(P^0)^2-|\mathbf{P}|^2=m^2$. The advantage of the observer formulation is that it survives unchanged in curved spacetime once $\eta$ is replaced by a general Lorentzian metric $g$.

## Null Vectors, Frequency, and Doppler Shift

Light is modeled by null directions. A future-directed null vector can be interpreted as a wave-vector (or photon momentum); its frequency is not an absolute number but a measurement made by an observer.

> [!info] Frequency Measured by an Observer
> Let $K$ be a future-directed null vector. For an observer $U\in\mathbb{H}^3$, define
> $$\omega_U(K):=-\eta(K,U).$$

> [!danger] Remark
> This is the cleanest definition because it is coordinate-free and linear in $K$. In the rest frame of $U=e_0$, one has $\omega_{e_0}(K)=K^0$, so the definition matches the familiar identification of frequency with the time component.

To compute concrete Doppler factors, write a null vector in a fixed inertial frame as
$$K=\omega(1,\mathbf{n}),\quad \omega>0,\quad |\mathbf{n}|=1,$$
where $\mathbf{n}$ is the spatial propagation direction.

> [!abstract] Doppler Formula in a Fixed Frame
> Let $U=(\gamma,\gamma\mathbf{v})\in\mathbb{H}^3$ with $|\mathbf{v}|<1$, and let $K=\omega(1,\mathbf{n})$ be future-directed null. Then
> $$\omega_U(K)=\gamma\omega\,(1-\mathbf{v}\cdot\mathbf{n}).$$
> In the colinear case $\mathbf{v}=\pm |\mathbf{v}|\,\mathbf{n}$,
> $$\omega_U(K)=\omega\,\sqrt{\frac{1\mp |\mathbf{v}|}{1\pm |\mathbf{v}|}},$$
> where the upper sign corresponds to the observer moving in the same direction as the light (receding), and the lower sign corresponds to approaching.

> [!success] Proof
> Compute directly:
> $$\eta(K,U)=\eta\big(\omega(1,\mathbf{n}),(\gamma,\gamma\mathbf{v})\big)=-\omega\gamma+\omega\gamma\,\mathbf{n}\cdot\mathbf{v}=-\gamma\omega(1-\mathbf{v}\cdot\mathbf{n}),$$
> so $\omega_U(K)=-\eta(K,U)$ gives the first formula. For the colinear case, use $\gamma(1\mp |\mathbf{v}|)=\sqrt{(1\mp |\mathbf{v}|)/(1\pm |\mathbf{v}|)}$.

> [!danger] Why We Care Now
> This computation is not merely a special-relativistic curiosity. In curved spacetime, the same invariant definition $\omega_U(K)=-g(K,U)$ along null geodesics produces gravitational redshift and cosmological redshift. What changes is not the measurement rule, but how $K$ evolves (geodesic transport) and how observers are chosen.

## Tensors in Minkowski Space: Raising/Lowering, Volume Form, and Invariants

The Lorentz group acts not only on vectors but on all tensor types. This is the language in which fields, conserved currents, and later curvature are naturally expressed.

> [!info] Raising and Lowering Indices
> The metric $\eta$ identifies vectors and covectors: for $v\in\mathbb{R}^{1,3}$ define $v^\flat:=\eta(v,\cdot)\in(\mathbb{R}^{1,3})^*$. Conversely, for $\alpha\in(\mathbb{R}^{1,3})^*$ define $\alpha^\sharp\in\mathbb{R}^{1,3}$ by $\eta(\alpha^\sharp,\cdot)=\alpha$. In coordinates,
> $$v_\mu=\eta_{\mu\nu}v^\nu,\quad \alpha^\mu=\eta^{\mu\nu}\alpha_\nu,\quad\text{with}\quad (\eta^{\mu\nu})=\mathrm{diag}(-1,1,1,1).$$

> [!info] Lorentz Action on Tensors
> For $\Lambda\in O(1,3)$, the induced action on covectors is
> $$(\Lambda\cdot \alpha)(v):=\alpha(\Lambda^{-1}v),$$
> and on a general $(k,\ell)$-tensor $T$ by the natural rule obtained by acting with $\Lambda^{-1}$ on each vector slot and with $\Lambda^{-1}$ on each covector slot. In coordinates this recovers the usual transformation law involving $\Lambda$ and $\Lambda^{-1}$.

> [!abstract] Contractions Built from $\eta$ Are Lorentz-Invariant
> Any scalar obtained by contracting indices using $\eta$ is invariant under the $O(1,3)$-action. For example, $\eta(v,v)$, $\eta^{\mu\nu}T_{\mu\nu}$, and $F_{\mu\nu}F^{\mu\nu}$ are Lorentz-invariant scalars.

> [!success] Proof
> The identity $\Lambda^{T}\eta\Lambda=\eta$ is precisely the statement that raising/lowering and contraction commute with the Lorentz action.

We also fix the standard orientation and the corresponding volume form.

> [!info] Volume Form and Levi–Civita Symbol
> Let $\varepsilon_{\mu\nu\rho\sigma}$ be the totally antisymmetric symbol with $\varepsilon_{0123}=+1$. The standard volume form is
> $$\mathrm{vol}_\eta := dx^0\wedge dx^1\wedge dx^2\wedge dx^3.$$
> For $\Lambda\in SO^{+}(1,3)$, one has $\Lambda^*\mathrm{vol}_\eta=\mathrm{vol}_\eta$.

> [!success] Proof
> For any linear map $\Lambda$, one has $\Lambda^*(dx^0\wedge\cdots\wedge dx^3)=(\det\Lambda)\,dx^0\wedge\cdots\wedge dx^3$. If $\Lambda\in SO^{+}(1,3)$ then $\det\Lambda=1$.

## A Fundamental Example: A $2$-Form, Its $E/B$ Splitting, and Its Invariants

A $2$-form is the prototype of a relativistic field: it is coordinate-free, tensorial, and admits meaningful invariants. The electromagnetic field is the motivating example, but the algebra works for any $2$-form.

> [!info] Hodge Star on $(\mathbb{R}^{1,3},\eta)$
> Fix the orientation given by $\mathrm{vol}_\eta$. For $k$-forms $\alpha,\beta$, define the Hodge star $\star:\Lambda^k(\mathbb{R}^{1,3})^*\to \Lambda^{4-k}(\mathbb{R}^{1,3})^*$ by
> $$\alpha\wedge \star\beta = \langle \alpha,\beta\rangle_\eta\,\mathrm{vol}_\eta,$$
> where $\langle\cdot,\cdot\rangle_\eta$ is the inner product on $k$-forms induced by $\eta$.

> [!danger] Remark
> Because $\eta$ has Lorentzian signature, the identity for $\star^2$ differs from the Riemannian case. In signature $(-,+,+,+)$ one has $\star^2=-\mathrm{id}$ on $2$-forms. We will revisit this systematically in the semi-Riemannian setting later.

Now fix an observer $U\in\mathbb{H}^3$ and let $F$ be a $2$-form. The observer extracts two spatial $1$-forms: the “electric” and “magnetic” parts.

> [!info] Electric and Magnetic Fields Measured by an Observer
> Let $U\in\mathbb{H}^3$ and let $F$ be a $2$-form. Define the $1$-forms
> $$E:=\iota_U F,\quad B:=\iota_U(\star F),$$
> that is, $E_a = F_{ab}U^b$ and $B_a = (\star F)_{ab}U^b$.

> [!abstract] Measured Fields Are Spatial
> With $E,B$ as above,
> $$E(U)=0,\quad B(U)=0.$$
> Equivalently, $E^\sharp,B^\sharp\in U^\perp$.

> [!success] Proof
> Since $F$ is antisymmetric,
> $$E(U)=E_aU^a=F_{ab}U^bU^a=0.$$
> Likewise $\star F$ is antisymmetric, so $B(U)=0$.

> [!danger] What Is Observer-Dependent Here?
> The $2$-form $F$ is observer-independent tensorial data. The splitting $F\mapsto (E,B)$ depends on the choice of observer $U$. This is the clean mathematical encoding of the physical statement that different inertial observers decompose the same electromagnetic field into different electric and magnetic fields.

The splitting is not merely a definition; it is powerful because it is invertible: $(E,B)$ and $U$ determine $F$.

> [!abstract] Reconstruction of a $2$-Form from $(U,E,B)$
> Let $U\in\mathbb{H}^3$ and let $E,B$ be $1$-forms satisfying $E(U)=B(U)=0$. Define
> $$F := U^\flat\wedge E + \star(U^\flat\wedge B).$$
> Then $\iota_U F=E$ and $\iota_U(\star F)=B$. In particular, for any $2$-form $F$ the pair $(E,B)$ defined from $F$ satisfies this reconstruction formula.

> [!success] Proof
> Use the identities $\iota_U(U^\flat\wedge E)=\iota_U(U^\flat)\,E-U^\flat\wedge \iota_U E$ and $\iota_U(U^\flat)=\eta(U,U)=-1$. Since $E(U)=0$, we have $\iota_U E=E(U)=0$ as a scalar, hence
> $$\iota_U(U^\flat\wedge E)=-E.$$
> Thus $\iota_U(-U^\flat\wedge E)=E$; the sign convention is handled by the fact that $\eta(U,U)=-1$.
>
> Next, note that $U^\flat\wedge B$ is a $2$-form and $\star(U^\flat\wedge B)$ is also a $2$-form. A standard identity for the Hodge star gives $\iota_U \star (U^\flat\wedge B)=0$ when $B(U)=0$, so $\iota_U F$ comes entirely from the first term and equals $E$. Similarly, applying $\star$ and contracting again yields $\iota_U(\star F)=B$. (If desired, one can verify these identities in a frame where $U=e_0$, where the computation reduces to the classical component formulas.)

> [!danger] Remark
> In the rest frame of $U=e_0$, the reconstruction formula is exactly the familiar decomposition
> $$F = \sum_{i=1}^3 E_i\,dx^0\wedge dx^i + \sum_{1\le i<j\le 3}\varepsilon_{ijk}B_k\,dx^i\wedge dx^j.$$
> The point is that the same formula makes invariant sense without ever choosing coordinates.

Finally we extract the two basic Lorentz invariants.

> [!abstract] Two Lorentz Invariants of a $2$-Form
> Let $F$ be a $2$-form. The scalars
> $$I_1:=F_{\mu\nu}F^{\mu\nu},\quad I_2:=F_{\mu\nu}(\star F)^{\mu\nu}$$
> are invariant under $SO^{+}(1,3)$. In the rest frame of an observer $U=e_0$ with the decomposition above,
> $$I_1=2\big(|\mathbf{B}|^2-|\mathbf{E}|^2\big),\quad I_2=-4\,\mathbf{E}\cdot\mathbf{B}.$$

> [!success] Proof
> Invariance follows because $I_1$ and $I_2$ are contractions built from $\eta$ and $\star$, and $\star$ is defined using $\eta$ and $\mathrm{vol}_\eta$, both preserved by $SO^{+}(1,3)$.
>
> For the explicit formulas, compute in the rest frame $U=e_0$. One has $F_{0i}=E_i$ and $F_{ij}=\varepsilon_{ijk}B_k$. Raising indices gives $F^{0i}=-F_{0i}=-E_i$ and $F^{ij}=F_{ij}=\varepsilon_{ijk}B_k$. Thus
> $$F_{\mu\nu}F^{\mu\nu}=2\sum_{i=1}^3 F_{0i}F^{0i}+\sum_{i,j=1}^3 F_{ij}F^{ij}=-2|\mathbf{E}|^2+\sum_{i,j}(\varepsilon_{ijk}B_k)(\varepsilon_{ij\ell}B_\ell).$$
> Using $\sum_{i,j}\varepsilon_{ijk}\varepsilon_{ij\ell}=2\delta_{k\ell}$ gives $F_{\mu\nu}F^{\mu\nu}=2(|\mathbf{B}|^2-|\mathbf{E}|^2)$.
>
> Similarly, in the same frame one checks
> $$(\star F)_{0i}=B_i,\quad (\star F)_{ij}=-\varepsilon_{ijk}E_k,$$
> so $(\star F)^{0i}=-B_i$ and $(\star F)^{ij}=-(\varepsilon_{ijk}E_k)$. Then
> $$F_{\mu\nu}(\star F)^{\mu\nu}=2\sum_i F_{0i}(\star F)^{0i}+\sum_{i,j}F_{ij}(\star F)^{ij}=-2\,\mathbf{E}\cdot\mathbf{B}-2\,\mathbf{B}\cdot\mathbf{E}=-4\,\mathbf{E}\cdot\mathbf{B}.$$

> [!danger] The Recurring Pattern
> This is a model example of the general strategy: start with tensorial data (here a $2$-form), make observer-dependent decompositions (here $E,B$), and then extract observer-independent invariants by contraction (here $I_1,I_2$). In general relativity we will do the same with curvature, where the algebra gets richer but the philosophy is identical.

In this lecture we organized special-relativistic kinematics around boosts, rapidity, and the geometry of observers, and we emphasized “measurement” as tensor contraction and projection to an observer’s rest space. This gives a coordinate-free way to talk about energies, frequencies, and Doppler-type effects. Next we move to dynamics via action principles and Noether’s theorem, so conservation laws become structural rather than ad hoc.
