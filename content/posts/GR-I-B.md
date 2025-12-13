+++
date = "2025-04-06T15:44:10-04:00"
draft = false
title = "Lorentz and Poincaré Groups"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity" ]
+++
## Guiding idea: “what changes between inertial frames” is symmetry

Phase I.A framed special relativity as geometry on Minkowski spacetime: events live in an affine space $\mathbb{M}^{1,3}$ and the invariant interval is encoded by a Lorentzian bilinear form $\eta$ of signature $(-,+,+,+)$. The next step is to understand **which transformations preserve this structure**.

Physically, an **inertial frame** is a choice of affine coordinates in which free particles move with constant coordinate velocity and light travels on straight null lines. Passing from one inertial frame to another should not change:
- the classification timelike/null/spacelike;
- the causal cones and hence which events can influence which;
- the proper time measured by clocks along timelike curves;
- the form of fundamental laws (in particular, the equations for free motion and electromagnetism).

Mathematically, these requirements single out the group of affine isometries of Minkowski spacetime: the **Poincaré group**. Its linear part is the **Lorentz group**. Understanding these groups is the symmetry backbone of special relativity and the conceptual template for general relativity (where the symmetry becomes local and dynamical).

Throughout, we take $c=1$ and use the mostly-plus convention $\eta=\mathrm{diag}(-1,1,1,1)$ in inertial coordinates $x^\mu=(t,x^1,x^2,x^3)$.

## I.B.1 The Lorentz group and its components

> [!info] Lorentz Group
> Let $(V,\eta)$ be a real $4$-dimensional vector space with a nondegenerate symmetric bilinear form of signature $(-,+,+,+)$. The **Lorentz group** is
> $$O(1,3)\coloneqq \{\Lambda\in GL(V): \eta(\Lambda u,\Lambda v)=\eta(u,v)\ \text{for all }u,v\in V\}.$$
> After choosing an $\eta$-orthonormal basis, we identify $V\cong\mathbb{R}^4$ and write the defining condition as
> $$\Lambda^{\mathsf T}\eta\Lambda=\eta,\quad \eta=\mathrm{diag}(-1,1,1,1).$$

> [!danger] Why this is the right definition
> The interval between two events $p,q\in\mathbb{M}^{1,3}$ is $s^2(p,q)=\eta(q-p,q-p)$. If an inertial change of coordinates has linear part $\Lambda$, then $q-p$ transforms to $\Lambda(q-p)$. Thus the demand that the interval (hence causal type) is invariant is exactly $\Lambda^{\mathsf T}\eta\,\Lambda=\eta$.

> [!abstract] Immediate Consequences
> If $\Lambda\in O(1,3)$ then:
> 1. $\Lambda$ preserves causal character: $\eta(v,v)\lessgtr 0$ and $\eta(v,v)=0$ are preserved. In particular, $\Lambda$ maps the null cone to the null cone.
> 2. $\det(\Lambda)=\pm 1$.
> 3. $\Lambda$ sends timelike vectors to timelike vectors and spacelike to spacelike; hence it preserves the two-sheeted timelike hyperboloid $\{v:\eta(v,v)=-1\}$.

> [!success] Proofs
> (1) follows from $\eta(\Lambda v,\Lambda v)=\eta(v,v)$. For (2), take determinants in $\Lambda^{\mathsf T}\eta\,\Lambda=\eta$:
> $$\det(\Lambda^{\mathsf T}\eta\Lambda)=\det(\eta)
> \quad\Rightarrow\quad
> (\det\Lambda)^2\det(\eta)=\det(\eta)
> \quad\Rightarrow\quad
> (\det\Lambda)^2=1.$$
> (3) is a restatement of (1) applied to $\eta(v,v)=-1$ and $\eta(v,v)>0$.

> [!info] Proper and Improper; Ortochronous and Non-orthochronous
> Define the **proper Lorentz group** $SO(1,3)\coloneqq O(1,3)\cap SL(4,\mathbb{R})$ (i.e. $\det\Lambda=1$).
>
> Fix a time orientation on $(V,\eta)$, equivalently a choice of one of the two connected components of the timelike cone. An element $\Lambda\in O(1,3)$ is called **orthochronous** if it preserves the chosen component (i.e. it sends future-directed timelike vectors to future-directed timelike vectors).
>
> The **proper orthochronous Lorentz group** is
> > $$SO^+(1,3)\coloneqq \{\Lambda\in SO(1,3):\Lambda\ \text{is orthochronous}\}.$$

> [!danger] The physics of the four components
> The group $O(1,3)$ has four connected components, detected by two discrete choices:
> - **spatial orientation**: $\det(\Lambda)=\pm 1$ (proper vs improper);
> - **time orientation**: whether $\Lambda$ preserves future vs flips it (orthochronous vs non-orthochronous).
>
> Physically, continuous changes of inertial frames (e.g. slowly accelerating a laboratory and then returning to inertial motion) should not force a discontinuous flip of the time direction or a parity inversion. Hence, in most “continuous” physics, the relevant group is the identity component $SO^+(1,3)$. Discrete symmetries such as parity $P$ and time reversal $T$ live in the other components.

To connect orthochronousness with a concrete matrix condition, write $\Lambda=(\Lambda^\mu{}_\nu)$ in inertial coordinates where $e_0=(1,0,0,0)$ is future-directed timelike.

> [!abstract] Ortochronous Criterion
> Let $\Lambda\in O(1,3)$. Then the following are equivalent:
> 1. $\Lambda$ is orthochronous (preserves the future timelike cone).
> 2. $(\Lambda e_0)^0>0$ (the image of the standard future unit time vector remains future-directed).
> 3. $\Lambda^0{}_0\ge 1$.

> [!success] Proofs
> (1)$\Leftrightarrow$(2): the future timelike cone is connected and generated by future-directed unit timelike vectors; preserving it is equivalent to sending one future unit timelike vector to a future-directed timelike vector.
>
> (2)$\Rightarrow$(3): set $u=\Lambda e_0$. Since $\Lambda$ preserves $\eta$,
> $$\eta(u,u)=\eta(e_0,e_0)=-1,
> \quad\text{so}\quad
> -(u^0)^2+\|\vec{u}\|^2=-1
> \ \Rightarrow\ 
> (u^0)^2=1+\|\vec{u}\|^2\ge 1.$$
> If $u$ is future-directed then $u^0>0$, hence $u^0\ge 1$. But $u^0=(\Lambda e_0)^0=\Lambda^0{}_0$.
>
> (3)$\Rightarrow$(2): if $\Lambda^0{}_0\ge 1$ then $(\Lambda e_0)^0\ge 1>0$, so $\Lambda e_0$ is future-directed.

## Lie algebra $\mathfrak{so}(1,3)$ and infinitesimal symmetries

In physics, one constantly linearizes symmetries: “small boosts”, “small rotations”, generators, and commutators. This is the Lie algebra viewpoint.

> [!info] Lorentz Lie Algebra
> The Lie algebra of $O(1,3)$ is
> $$\mathfrak{so}(1,3)\coloneqq \{A\in \mathfrak{gl}(4,\mathbb{R}): A^{\mathsf T}\eta+\eta A=0\}.$$
> Equivalently, $A\in\mathfrak{so}(1,3)$ iff $\frac{d}{ds}\big|_{s=0} (e^{sA})^{\mathsf T}\eta\,e^{sA}=0$.

> [!danger] Geometric meaning
> If $\Lambda(s)=e^{sA}$ is a one-parameter subgroup, then $A$ is the infinitesimal generator of a continuous family of Lorentz transformations. In relativity, such one-parameter subgroups encode continuous symmetries of a system: for instance, spatial rotations around an axis, or boosts along a direction. Later, in field theory, Noether’s theorem turns these continuous symmetries into conserved quantities.

A standard and very useful basis of $\mathfrak{so}(1,3)$ is given by three rotation generators and three boost generators. Let $i,j,k\in\{1,2,3\}$ and let $\varepsilon_{ijk}$ denote the Levi-Civita symbol.

> [!info] Rotation and Boost Generators
> Define $4\times 4$ matrices $(J_i)$ and $(K_i)$ by their components
> $$(J_i)^0{}_\mu=(J_i)^\mu{}_0=0,\qquad (J_i)^j{}_k=\varepsilon_{ijk},$$
> and
> $$(K_i)^0{}_j=(K_i)^j{}_0=\delta_{ij},\qquad (K_i)^0{}_0=(K_i)^j{}_k=0.$$
> In block form (splitting time/space) this reads
> $$J_i=\begin{pmatrix} 0 & 0 \\ 0 & \widetilde J_i \end{pmatrix},
> \quad \widetilde J_i\in\mathfrak{so}(3),
> \qquad
> K_i=\begin{pmatrix} 0 & e_i^{\mathsf T} \\ e_i & 0_{3\times 3} \end{pmatrix},$$
> where $e_i$ is the $i$-th standard basis vector in $\mathbb{R}^3$.

> [!abstract] These are Lorentz generators
> For each $i=1,2,3$, one has $J_i,K_i\in\mathfrak{so}(1,3)$.

> [!success] Proofs
> This is a direct verification of $A^{\mathsf T}\eta+\eta A=0$ using the block forms and $\eta=\mathrm{diag}(-1,1,1,1)$. For $J_i$, the condition reduces to $\widetilde J_i^{\mathsf T}+\widetilde J_i=0$, true since $\widetilde J_i\in\mathfrak{so}(3)$. For $K_i$, one checks that the time-space blocks cancel because of the sign $-1$ in the time component of $\eta$.

> [!abstract] Commutation Relations
> The generators $J_i,K_i$ satisfy
> > $$[J_i,J_j]=\varepsilon_{ijk}J_k,\qquad
> [J_i,K_j]=\varepsilon_{ijk}K_k,\qquad
> [K_i,K_j]=-\varepsilon_{ijk}J_k.$$

> [!success] Proofs
> Compute using block matrices. The first identity is the usual $\mathfrak{so}(3)$ commutator. The second expresses that boosts transform as vectors under rotations. The third is the distinctive Lorentzian sign: two boosts do not commute and their commutator is a rotation (physically, this is the algebraic shadow of Thomas precession).

> [!danger] Structure insight
> As a Lie algebra, $\mathfrak{so}(1,3)$ is $6$-dimensional. The relations above encode the fact that $\mathfrak{so}(1,3)$ is not a direct sum $\mathfrak{so}(3)\oplus \mathbb{R}^3$: boosts and rotations are tightly coupled. This coupling is one reason “relativistic kinematics” has richer geometry than its Newtonian counterpart.

## I.B.2 Boosts, rotations, rapidity, and velocity addition

### Rotations as a subgroup

Spatial rotations should preserve time and act orthogonally on space.

> [!info] Spatial Rotation Subgroup
> Let $R\in SO(3)$. Define $\Lambda_R\in SO^+(1,3)$ by
> $$\Lambda_R=\begin{pmatrix} 1 & 0 \\ 0 & R\end{pmatrix}.$$
> The map $SO(3)\to SO^+(1,3)$, $R\mapsto\Lambda_R$, is an injective group homomorphism. Its image is called the **rotation subgroup**.

> [!danger] Physical meaning
> If two inertial frames differ only by a spatial rotation of the laboratory axes, then they share the same time coordinate (up to translation) and the same notion of simultaneity; only the spatial directions are relabeled.

### Pure boosts as hyperbolic rotations

A **boost** is the transformation between two inertial frames in relative uniform motion.

> [!info] Boost in One Direction
> Fix the $x^1$-axis. For $v\in(-1,1)$ define $\gamma=\frac{1}{\sqrt{1-v^2}}$ and set
> $$\Lambda(v)=\begin{pmatrix}\gamma & -\gamma v & 0 & 0 \\ -\gamma v & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}.$$

> [!abstract] Boosts are Lorentz transformations
> For each $v\in(-1,1)$, $\Lambda(v)\in SO^+(1,3)$ and preserves $\eta$.

> [!success] Proofs
> This is the matrix version of the boost computation from I.A. One checks directly that $\Lambda(v)^{\mathsf T}\eta\,\Lambda(v)=\eta$. Also $\det\Lambda(v)=1$ and $\Lambda(v)^0{}_0=\gamma\geq 1$, so $\Lambda(v)\in SO^+(1,3)$.

> [!danger] Why $|v|<1$ is built in
> The parameter range $|v|<1$ is not cosmetic: it corresponds to subluminal relative speeds. If one tries to set $|v|\ge 1$, the factor $\gamma$ becomes imaginary and $\Lambda(v)$ ceases to be real. Geometrically, $|v|<1$ is precisely the condition that the worldline of the primed frame’s origin is timelike.

### Rapidity: the natural additive parameter

Boosts look like Euclidean rotations except that circles are replaced by hyperbolas. This suggests using hyperbolic functions.

> [!info] Rapidity
> For $v\in(-1,1)$ define the **rapidity** $\phi\in\mathbb{R}$ by
> $$v=\tanh\phi,\qquad \gamma=\cosh\phi,\qquad \gamma v=\sinh\phi.$$
> Equivalently, $\phi=\operatorname{arctanh}(v)$.

In rapidity variables, the boost matrix becomes a hyperbolic rotation in the $(t,x^1)$-plane:

> [!abstract] Boost as hyperbolic rotation
> With $\phi$ as above, one has
> > $$\Lambda(\phi)=
> \begin{pmatrix}
> \cosh\phi & -\sinh\phi & 0 & 0\\
> -\sinh\phi & \cosh\phi & 0 & 0\\
> 0&0&1&0\\
> 0&0&0&1
> \end{pmatrix}.$$
> Moreover, $\Lambda(\phi_1)\Lambda(\phi_2)=\Lambda(\phi_1+\phi_2)$.

> [!success] Proofs
> The matrix form is immediate from $v=\tanh\phi$, $\gamma=\cosh\phi$, $\gamma v=\sinh\phi$. For composition, use hyperbolic addition formulas:
> $$\cosh(\phi_1+\phi_2)=\cosh\phi_1\cosh\phi_2+\sinh\phi_1\sinh\phi_2,\quad
> \sinh(\phi_1+\phi_2)=\sinh\phi_1\cosh\phi_2+\cosh\phi_1\sinh\phi_2.$$
> A direct matrix multiplication shows $\Lambda(\phi_1)\Lambda(\phi_2)$ has these entries in the $(0,1)$-block.

> [!danger] Velocity addition from rapidity additivity
> If two boosts are colinear with velocities $v_1=\tanh\phi_1$ and $v_2=\tanh\phi_2$, then the combined boost has rapidity $\phi_1+\phi_2$ and hence velocity
> $$v_{\mathrm{tot}}=\tanh(\phi_1+\phi_2)=\frac{\tanh\phi_1+\tanh\phi_2}{1+\tanh\phi_1\tanh\phi_2}=\frac{v_1+v_2}{1+v_1v_2}.$$
> This formula guarantees $|v_{\mathrm{tot}}|<1$ whenever $|v_1|,|v_2|<1$, reflecting the causal constraint that subluminal velocities compose to subluminal velocities.

### General boosts and a useful factorization

In $3+1$ dimensions, a boost can be along any spatial direction.

> [!info] Boost with Velocity Vector
> Let $\vec{v}\in\mathbb{R}^3$ with $\|\vec{v}\|<1$ and set $\gamma=\frac{1}{\sqrt{1-\|\vec{v}\|^2}}$. Define $\Lambda(\vec{v})\in SO^+(1,3)$ by
> $$\Lambda(\vec{v})=\begin{pmatrix}\gamma & -\gamma \vec{v}^{\mathsf{T}} \\ -\gamma \vec{v} & I_3+\frac{\gamma-1}{\|\vec{v}\|^2}\,\vec{v}\,\vec{v}^{\mathsf{T}}\end{pmatrix},$$
> with the convention that the fraction is interpreted by continuity as $\frac{\gamma-1}{\|\vec{v}\|^2}\to \frac{1}{2}$ as $\vec{v}\to 0$.

> [!abstract] Verification of the general boost formula
> The matrix $\Lambda(\vec v)$ satisfies $\Lambda(\vec v)^{\mathsf T}\eta\,\Lambda(\vec v)=\eta$ and hence is Lorentz. Moreover, $\Lambda(\vec v)e_0$ is the unit future-directed timelike vector $(\gamma,\gamma\vec v)$.

> [!success] Proofs
> A direct computation using block matrices shows that the time-time entry is preserved:
> $$-\gamma^2 + \gamma^2\|\vec v\|^2 = -\gamma^2(1-\|\vec v\|^2)=-1.$$
> One checks similarly that the mixed blocks vanish and that the spatial block is orthogonal to the time block with respect to $\eta$. The second statement follows immediately from multiplying the block matrix by $e_0=(1,0,0,0)$.

A particularly important structural statement is that any proper orthochronous Lorentz transformation can be built from a boost and a rotation.

> [!note] Boost–Rotation Factorization
> Let $\Lambda\in SO^+(1,3)$. Let $u=\Lambda e_0$, a unit future-directed timelike vector. Let $B$ be the unique boost such that $B e_0=u$ (for instance $B=\Lambda(\vec v)$ with $\vec v=u^{\mathrm{spatial}}/u^0$). Then $R\coloneqq B^{-1}\Lambda$ satisfies $R e_0=e_0$ and hence has block form
> $$R=\begin{pmatrix} 1 & 0 \\ 0 & \widetilde{R}\end{pmatrix} \quad\text{with}\quad \widetilde{R}\in SO(3).$$
> Thus $\Lambda=BR$ with $B$ a boost and $R$ a spatial rotation.

> [!success] Proofs
> Since $\Lambda\in SO^+(1,3)$, the vector $u=\Lambda e_0$ is future-directed unit timelike. Choose $B$ a boost with $Be_0=u$. Then $R=B^{-1}\Lambda$ preserves $\eta$ (as a product of Lorentz transformations) and satisfies $R e_0=B^{-1}(\Lambda e_0)=B^{-1}u=e_0$. Any Lorentz transformation fixing $e_0$ must preserve the orthogonal complement $e_0^\perp$, and the restriction of $\eta$ to $e_0^\perp$ is positive definite, hence the spatial block is in $SO(3)$.

> [!danger] Physical reading
> This factorization says: any change between inertial frames can be described as first a boost (changing relative velocity) and then a spatial rotation (relabeling axes). This is exactly how experimental setups are compared in practice.

## I.B.3 The Poincaré group: affine isometries of Minkowski spacetime

Lorentz transformations act linearly on displacement vectors. But inertial frames also differ by translations of the origin. The correct symmetry group of Minkowski spacetime as an affine metric space is therefore affine.

> [!info] Poincaré Group
> Let $\mathbb{M}^{1,3}$ be Minkowski spacetime modeled on $(V,\eta)$. The **Poincaré group** $\mathrm{ISO}(1,3)$ is the group of affine bijections $F:\mathbb{M}^{1,3}\to\mathbb{M}^{1,3}$ such that
> > $$\eta(F(q)-F(p),F(q)-F(p))=\eta(q-p,q-p)\qquad\text{for all }p,q\in\mathbb{M}^{1,3}.$$
> Equivalently, $F$ is of the form
> > $$F(p)=\Lambda p + a,$$
> where $\Lambda\in O(1,3)$ and $a\in V$ is a translation vector (after choosing an affine identification of $\mathbb{M}^{1,3}$ with $V$).

> [!abstract] Semidirect Product Structure
> With the identification above, the Poincaré group is the semidirect product
> > $$\mathrm{ISO}(1,3)\cong V\rtimes O(1,3),$$
> with group law
> > $$(a,\Lambda)\cdot(b,\Gamma) = (a+\Lambda b,\ \Lambda\Gamma),
> \qquad (a,\Lambda)^{-1}=(-\Lambda^{-1}a,\ \Lambda^{-1}).$$

> [!success] Proofs
> Compute composition:
> $$(\Lambda p+a)\xmapsto{(b,\Gamma)} \Gamma(\Lambda p+a)+b=(\Gamma\Lambda)p+(\Gamma a+b),$$
> which matches the stated multiplication after reordering parameters. The inverse formula is obtained by solving $p=\Lambda^{-1}(F(p)-a)$.

> [!danger] Physics: Noether preview
> In classical and quantum field theory on Minkowski spacetime, the assumption that the action is invariant under the Poincaré group is extraordinarily powerful. Translation invariance leads to conservation of energy-momentum, and Lorentz invariance leads to conservation of angular momentum and center-of-mass motion. In general relativity, full Poincaré invariance is lost globally, but reappears as a **local** symmetry in tangent spaces and (in asymptotically flat settings) as an **asymptotic** symmetry.

## I.B.4 Orbits and invariants: why “mass shells” are Lorentz geometry

A central use of Lorentz symmetry is classification by invariants. The fundamental invariant of a vector is its Minkowski norm $\eta(v,v)$ and its time orientation.

### Orbits in spacetime

> [!abstract] Lorentz Orbits of Nonzero Vectors
> Let $v\in V\setminus\{0\}$.
> 1. If $v$ is timelike, then there exists $\Lambda\in SO^+(1,3)$ such that $\Lambda v = (\alpha,0,0,0)$ with $\alpha=\sqrt{-\eta(v,v)}$ and $\alpha>0$ if $v$ is future-directed. Thus the timelike orbits are the two sheets of the hyperboloid $\eta(v,v)=-\alpha^2$.
> 2. If $v$ is null and future-directed, then there exists $\Lambda\in SO^+(1,3)$ such that $\Lambda v=(\beta,\beta,0,0)$ with $\beta>0$. Thus the future null cone is a single orbit under $SO^+(1,3)$ up to scaling.
> 3. If $v$ is spacelike, then there exists $\Lambda\in SO^+(1,3)$ such that $\Lambda v=(0,\sigma,0,0)$ with $\sigma=\sqrt{\eta(v,v)}>0$.

> [!success] Proofs
> (1) Let $v$ be future-directed timelike. Set $u=v/\sqrt{-\eta(v,v)}$, so $\eta(u,u)=-1$. Choose the boost $B$ with $B e_0=u$. Then $B^{-1}u=e_0$, hence $B^{-1}v=\sqrt{-\eta(v,v)}\,e_0$.
>
> (2) For future-directed null $v$, pick an inertial frame so that $v^0>0$. Using a spatial rotation, align the spatial part of $v$ with the $x^1$-axis, reducing to $(v^0,v^1,0,0)$ with $v^0=|v^1|$ by nullness. Future-directedness forces $v^1=v^0$. Scaling yields $(\beta,\beta,0,0)$.
>
> (3) Similarly, rotate $v$ so that it lies in the $(x^1)$-direction and then apply a boost in the $(t,x^1)$-plane to kill the time component while preserving the norm. Concretely, if $v=(v^0,v^1,0,0)$ with $\eta(v,v)>0$, choose $\phi$ with $\tanh\phi=v^0/v^1$ (possible since $|v^0|<|v^1|$ in the spacelike case). Then the boost $\Lambda(\phi)$ sends $v$ to $(0,\sigma,0,0)$ with $\sigma=\sqrt{\eta(v,v)}$.

> [!danger] What this tells you physically
> The Lorentz group acts transitively on:
> - the set of future unit timelike vectors (idealized “four-velocities” of inertial observers);
> - the set of future null directions (light propagation directions).
>
> Thus there is no preferred inertial observer or preferred light direction in Minkowski spacetime: this is the geometric content of the relativity principle at the level of causal geometry.

### Orbits in momentum space and mass shells

In relativity, the same Minkowski geometry governs four-momentum. If $p^\mu$ is the four-momentum of a particle, Lorentz invariance implies that $\eta(p,p)$ is an invariant. This leads to the mass shell condition.

> [!info] Mass Shells
> In momentum space $V^**$ (identified with $V$ via $\eta$), define:
> - the **massive (timelike) shell** of mass $m>0$:
> > $$\mathcal{H}_m^\pm \coloneqq \{p: \eta(p,p)=-m^2,\ \pm p^0>0\};$$
> - the **massless (null) shell**:
> > $$\mathcal{N}^\pm \coloneqq \{p\neq 0: \eta(p,p)=0,\ \pm p^0>0\}.$$

> [!danger] Physics reading: massive vs massless
> For a free massive particle, one writes $p^\mu=mU^\mu$ where $U$ is unit timelike four-velocity, hence $\eta(p,p)=-m^2$. For a massless particle (idealized photon), $p$ is future-directed null, hence $\eta(p,p)=0$. The Lorentz group preserves these shells, and the Poincaré group controls the conservation laws built from them.

> [!abstract] Energy–Momentum Relation
> Write $p=(E,\vec p)$ in an inertial frame (identifying $p^0=E$ and spatial momentum $\vec p$). Then
> $$\eta(p,p) = -E^2+\|\vec p\|^2.$$
> Hence on $\mathcal{H}_m^+$ one has the invariant relation
> $$E^2=\|\vec p\|^2+m^2,$$
> and on $\mathcal{N}^+$ one has $E=\|\vec p\|$.

> [!success] Proofs
> This is a direct computation from $\eta=\mathrm{diag}(-1,1,1,1)$.

> [!danger] A first hint of representation theory (without doing it)
> In quantum theory, particles are classified by irreducible unitary representations of the Poincaré group. At a very naive geometric level, this classification begins with the orbit picture: mass shells are Poincaré/Lorentz orbits in momentum space, and the **little group** (stabilizer of a chosen momentum) controls internal degrees of freedom (spin/helicity). We will not develop this theory here, but the geometry of orbits we proved above is its starting point.

