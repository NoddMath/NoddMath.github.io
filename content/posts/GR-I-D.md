+++
date = "2025-04-06T15:44:10-04:00"
draft = false
title = "Relativistic Dynamics and Electromagnetism"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity" ]
+++
## Guiding idea: dynamics is geometry plus a choice of interaction

Phases I.A–I.C built the kinematic stage: Minkowski spacetime $(\mathbb{M}^{1,3},\eta)$, proper time, four-velocity, and the geometric meaning of inertial motion. Dynamics begins when we specify *how* worldlines bend, i.e. when we introduce forces or, more invariantly, *interactions*. In special relativity, the cleanest and most important example is electromagnetism, because it couples naturally to the Lorentzian geometry and already forces us to think in tensors and differential forms.

This lecture has two intertwined goals:
- to define relativistic momentum and energy in a way that is manifestly Lorentz-invariant, and to see how the mass shell geometry from I.B becomes the natural constraint surface for free particles;
- to reformulate electromagnetism in Minkowski spacetime as a $2$-form $F$ satisfying Maxwell’s equations and coupling to charged particles via the Lorentz force law.

Along the way we introduce the action principles that package these statements and foreshadow the definition of the stress–energy tensor in the next lecture.

Throughout we use units $c=1$ and signature $(-,+,+,+)$, with inertial coordinates $x^\mu=(t,x^1,x^2,x^3)$.

## I.D.1 Four-momentum, mass shells, and the energy–momentum relation

### Mass as a geometric invariant

A massive particle has a timelike worldline $\gamma(\tau)$ parametrized by proper time, with four-velocity $U=d\gamma/d\tau$ satisfying $\eta(U,U)=-1$. The scalar $m>0$ (rest mass) is an invariant label for the particle species. In special relativity, the correct notion of momentum is obtained by combining these two invariant objects.

> [!info] Four-Momentum
> Let $\gamma(\tau)$ be the worldline of a massive particle of rest mass $m>0$. The *four-momentum* is the timelike vector
> $$p \coloneqq mU.$$
> In components, $p^\mu=mU^\mu$.

> [!abstract] Mass shell condition
> The four-momentum satisfies $\eta(p,p)=-m^2$.

> [!success] Proofs
> Immediate from $\eta(U,U)=-1$: $\eta(p,p)=m^2\eta(U,U)=-m^2$.

> [!danger] Geometry in momentum space
> The condition $\eta(p,p)=-m^2$ means that $p$ lies on the two-sheeted hyperboloid $\{p:\eta(p,p)=-m^2\}$ (the massive mass shell), and future-directedness selects the positive-energy sheet. This is not an afterthought: Lorentz symmetry acts transitively on this sheet, and much of relativistic mechanics is “motion on the mass shell”.

### Energy and 3-momentum in an inertial frame

To connect with the classical concepts of energy and momentum, choose an inertial frame and write
$$p=(p^0,p^1,p^2,p^3)=(E,\vec p).$$
We now derive the standard relations, emphasizing which parts are invariant and which depend on the chosen frame.

> [!abstract] Energy–momentum relation
> For a massive particle with four-momentum $p=(E,\vec p)$ in an inertial frame,
> $$E^2=\|\vec{p}\|^2+m^2.$$
> For a massless particle ($m=0$), $\eta(p,p)=0$ and hence $E=\|\vec p\|$.

> [!success] Proofs
> Compute using $\eta=\mathrm{diag}(-1,1,1,1)$:
> $$\eta(p,p)=-(p^0)^2+\|\vec p\|^2=-E^2+\|\vec{p}\|^2.$$
> Setting $\eta(p,p)=-m^2$ gives $E^2=\|\vec{p}\|^2+m^2$. If $m=0$, then $\eta(p,p)=0$ gives $E=\|\vec{p}\|$ with $E>0$ for future-directed $p$.

> [!abstract] Momentum and energy in terms of $\vec v$
> Let $\gamma(\tau)=(t(\tau),\vec x(\tau))$ be a massive particle worldline, and let $\vec v=d\vec x/dt$ be its coordinate velocity. Then
> $$p=mU=m(\gamma,\gamma\vec v),\qquad E=p^0=m\gamma,\qquad \vec p = m\gamma\,\vec v,$$
> where $\gamma=(1-\|\vec v\|^2)^{-1/2}$.

> [!success] Proofs
> Immediate from $U=(\gamma,\gamma\vec v)$.

> [!danger] Why relativistic momentum is $m\gamma\vec v$
> The factor $\gamma$ is forced by Lorentz invariance: $p$ must be a four-vector, and $U$ is the unique invariantly defined “velocity” along the worldline. The classical $\vec p=m\vec v$ is recovered only in the low-speed limit when $\gamma\approx 1$.

### Newtonian limit

Relativity should reproduce Newtonian mechanics when speeds are small compared to the speed of light (here $1$). A standard check is the expansion of $E=m\gamma$.

> [!abstract] Nonrelativistic expansion of energy
> For $\|\vec v\|\ll 1$,
> $$E=m\gamma=m\left(1+\frac{1}{2}\|\vec{v}\|^2+\frac{3}{8}\|\vec{v}\|^4+O(\|\vec v\|^6)\right).$$
> In particular,
> $$E=m+\frac{1}{2}m\|\vec{v}\|^2+O(\|\vec{v}\|^4).$$

> [!success] Proofs
> Use $(1-x)^{-1/2}=1+\frac{1}{2}x+\frac{3}{8}x^2+O(x^3)$ with $x=\|\vec{v}\|^2$.

> [!danger] Rest energy
> The leading term $m$ is the rest energy (in units $c=1$). Restoring $c$ yields $E=mc^2+\frac12m\|\vec v\|^2+\cdots$. Mathematically, $m$ is simply the Lorentz-invariant length $\sqrt{-\eta(p,p)}$ of the momentum vector.

## I.D.2 Forces, equations of motion, and the Lorentz force law

In special relativity, a “force” should be a covariant rule producing an evolution equation for $p(\tau)$ along a worldline. The natural parameter is proper time $\tau$, and the natural derivative is $dp/d\tau$.

> [!info] Four-Force
> For a particle with four-momentum $p(\tau)$ along its worldline, the *four-force* is
> > $$f \coloneqq \frac{dp}{d\tau}.$$
> In components, $f^\mu=dp^\mu/d\tau$.

> [!danger] Caution: $f$ depends on the model
> Unlike $U$ or $p$, the four-force is not an intrinsic spacetime object unless the interaction is specified. For electromagnetism it will be built from the electromagnetic field tensor $F$ and the charge $q$. In more general theories it could depend on other fields or on the worldline itself.

### Orthogonality constraints

A basic constraint follows immediately if the rest mass $m$ is constant along the motion (no rockets expelling fuel, no radiation reaction, etc.).

> [!abstract] Orthogonality for constant mass
> Assume the particle has constant rest mass $m$ so that $\eta(p,p)=-m^2$ along the worldline. Then
> > $$\eta(f,p)=0\qquad\text{and hence}\qquad \eta(f,U)=0.$$

> [!success] Proofs
> Differentiate $\eta(p,p)=-m^2$ with respect to $\tau$:
> > $$0=\frac{d}{d\tau}\eta(p,p)=2\eta\left(\frac{dp}{d\tau},p\right)=2\eta(f,p).$$
> Since $p=mU$ with $m\neq 0$, $\eta(f,U)=\frac1m\eta(f,p)=0$.

> [!danger] Physical meaning
> The orthogonality $\eta(f,U)=0$ says the four-force does not change the invariant norm of the four-velocity. In a chosen inertial frame this orthogonality becomes a relation between power and 3-force. We will compute that explicitly after introducing electromagnetism.

### Lorentz force law

The electromagnetic interaction is special because it is linear in velocity and respects Lorentz symmetry. The covariant force law is encoded by an antisymmetric tensor $F_{\mu\nu}$.

> [!info] Lorentz force law
> Let $F$ be an antisymmetric $(0,2)$-tensor field on Minkowski spacetime (the electromagnetic field tensor), and let $q\in\mathbb{R}$ be the particle’s charge. The *Lorentz force equation* is
> > $$\frac{dp^\mu}{d\tau}=q\,F^\mu{}_{\nu}U^\nu,\qquad\text{equivalently}\qquad \frac{dU^\mu}{d\tau}=\frac{q}{m}\,F^\mu{}_{\nu}U^\nu.$$

> [!abstract] Automatic orthogonality
> If $F_{\mu\nu}$ is antisymmetric, then any $f^\mu=qF^\mu{}_{\nu}U^\nu$ satisfies $\eta(f,U)=0$.

> [!success] Proofs
> Compute using $f_\mu=\eta_{\mu\alpha}f^\alpha=q\,\eta_{\mu\alpha}F^\alpha{}_\nu U^\nu=qF_{\mu\nu}U^\nu$:
> > $$\eta(f,U)=f_\mu U^\mu=qF_{\mu\nu}U^\nu U^\mu.$$
> But $U^\mu U^\nu$ is symmetric in $(\mu,\nu)$ while $F_{\mu\nu}=-F_{\nu\mu}$ is antisymmetric, so the contraction vanishes.

> [!danger] What is being assumed
> The Lorentz force law postulates that the force is linear in $U$ and built from a rank-$2$ antisymmetric field $F$. This is not a theorem: it is a compact way to encode the empirical content of electromagnetism in a Lorentz-invariant language. Its real power emerges once we learn how $F$ itself is determined by Maxwell’s equations.

## I.D.3 Electromagnetism as a 2-form: fields, observers, Maxwell equations

Electromagnetism is most naturally expressed in tensor language, and even more cleanly using differential forms. We will write it in both component notation (for computations) and form notation (for structure).

### The field tensor and its decomposition

> [!info] Electromagnetic field tensor
> The electromagnetic field is a smooth $2$-form $F\in\Omega^2(\mathbb{M}^{1,3})$, equivalently an antisymmetric tensor $F_{\mu\nu}=-F_{\nu\mu}$.

Fix an inertial frame $(t,\vec x)$ and define the electric field $\vec E$ and magnetic field $\vec B$ in that frame by
$$
F_{0i}=E_i,\qquad F_{ij}=-\varepsilon_{ijk}B_k,
$$
where $\varepsilon_{ijk}$ is the Levi-Civita symbol on $\mathbb{R}^3$ with $\varepsilon_{123}=1$.

> [!abstract] Matrix form of $F$
> With the convention $F_{0i}=E_i$ and $F_{ij}=-\varepsilon_{ijk}B_k$, the matrix $(F_{\mu\nu})$ is
> > $$\begin{pmatrix}
> 0 & E_1 & E_2 & E_3\\
> -E_1 & 0 & -B_3 & B_2\\
> -E_2 & B_3 & 0 & -B_1\\
> -E_3 & -B_2 & B_1 & 0
> \end{pmatrix}.$$

> [!success] Proofs
> This is just unpacking $F_{0i}=E_i$ and $F_{ij}=-\varepsilon_{ijk}B_k$.

> [!danger] Observer dependence
> The split of $F$ into $\vec E$ and $\vec B$ depends on the chosen inertial frame. Under a boost, electric and magnetic fields mix. The invariant object is $F$ itself. This is a clean instance of a general theme: *fields are geometric; their decompositions are observer-dependent.*

There is also a coordinate-free decomposition relative to any observer $u$ (unit timelike vector field). Define the electric and magnetic fields measured by $u$ as spatial vectors in $u^\perp$:
$$
E(u)_\mu \coloneqq F_{\mu\nu}u^\nu,\qquad B(u)_\mu \coloneqq (*F)_{\mu\nu}u^\nu,
$$
where $*$ is the Hodge star of $(\mathbb{M}^{1,3},\eta)$ with the chosen orientation.

> [!abstract] Basic properties of $E(u)$ and $B(u)$
> If $u$ is unit timelike, then $\eta(E(u),u)=\eta(B(u),u)=0$, so both are spatial (lie in $u^\perp$). In the inertial frame where $u=\partial_t$, these coincide with the usual $\vec E$ and $\vec B$.

> [!success] Proofs
> For $E(u)$,
> > $$\eta(E(u),u)=E(u)_\mu u^\mu = F_{\mu\nu}u^\nu u^\mu=0$$
> by antisymmetry of $F_{\mu\nu}$. The same argument applies to $*F$ for $B(u)$.
>
> In the frame $u=\partial_t$ (components $u^\mu=(1,0,0,0)$), $E(u)_i=F_{i0}=-F_{0i}=-E_i$ up to index conventions; one can adjust the sign by choosing $E_i=F_{i0}$ instead of $F_{0i}$, but the geometric content is unchanged. We keep the fixed convention and interpret accordingly.

> [!danger] Convention warning
> Different textbooks place signs differently in the definitions of $(\vec E,\vec B)$ inside $F$. What matters is consistency: Maxwell’s equations and Lorentz force will fix the correct relative signs. We will check this by recovering the standard 3-vector form below.

### Maxwell's equations

In Minkowski spacetime (flat), Maxwell’s equations can be written in several equivalent ways. Let $J^\mu=(\rho,\vec J)$ be the four-current density, where $\rho$ is charge density and $\vec J$ is current density in an inertial frame.

> [!info] Maxwell equations (tensor form)
> Maxwell’s equations are
> > $$\partial_{[\alpha}F_{\beta\gamma]}=0,\qquad \partial_\mu F^{\mu\nu}=J^\nu,$$
> where $[\alpha\beta\gamma]$ denotes antisymmetrization and indices are raised using $\eta^{\mu\nu}$.

> [!info] Maxwell equations (form notation)
> Equivalently, in differential-form notation,
> > $$dF=0,\qquad d\,{*F} = {*J},$$
> where $J$ is the current $1$-form corresponding to $J^\mu$ via the metric, and ${*J}$ is its Hodge dual $3$-form.

> [!danger] Why two equations
> The equation $dF=0$ encodes the absence of magnetic monopoles and Faraday’s induction law. The equation $d{*F}={*J}$ encodes Gauss’s law and Ampère–Maxwell law and tells you how charges and currents source fields. In curved spacetime, the same equations hold with $d$ unchanged (it is topological), but the Hodge star depends on $g$, so the second equation becomes metric-dependent in a crucial way.

### Recovering the standard 3-vector Maxwell system

> [!abstract] Tensor Maxwell $\Rightarrow$ 3-vector Maxwell
> In an inertial frame, Maxwell’s equations are equivalent to
> > $$\begin{aligned}
> \nabla\cdot \vec B &= 0,\\
> \partial_t \vec B + \nabla\times \vec E &= 0,\\
> \nabla\cdot \vec E &= \rho,\\
> \nabla\times \vec B - \partial_t \vec E &= \vec J,
> \end{aligned}$$
> where $J^\mu=(\rho,\vec J)$ and $\nabla$ is the Euclidean spatial gradient in that frame.

> [!success] Proofs
> We sketch the key computations; each line is an index identity.
>
> *Homogeneous equations.* The equation $\partial_{[\alpha}F_{\beta\gamma]}=0$ means
> > $$\partial_\alpha F_{\beta\gamma}+\partial_\beta F_{\gamma\alpha}+\partial_\gamma F_{\alpha\beta}=0.$$
> Take $(\alpha,\beta,\gamma)=(i,j,k)$ spatial indices:
> > $$\partial_i F_{jk}+\partial_j F_{ki}+\partial_k F_{ij}=0.$$
> Using $F_{ij}=-\varepsilon_{ij\ell}B_\ell$ gives a standard Levi-Civita identity equivalent to $\nabla\cdot\vec B=0$.
>
> Next take $(\alpha,\beta,\gamma)=(0,i,j)$:
> > $$\partial_0F_{ij}+\partial_iF_{j0}+\partial_jF_{0i}=0.$$
> With $F_{ij}=-\varepsilon_{ij\ell}B_\ell$ and $F_{0i}=E_i$ and $F_{i0}=-E_i$, this becomes
> > $$-\varepsilon_{ij\ell}\partial_t B_\ell - \partial_i E_j + \partial_j E_i=0,$$
> i.e. $\partial_t\vec B+\nabla\times\vec E=0$.
>
> *Inhomogeneous equations.* Now compute $\partial_\mu F^{\mu\nu}=J^\nu$. Raising indices uses $\eta^{00}=-1$ and $\eta^{ij}=\delta^{ij}$, so
> > $$F^{0i}=-E_i,\qquad F^{ij}=F_{ij}=-\varepsilon_{ij\ell}B_\ell.$$
> Take $\nu=0$:
> > $$\partial_\mu F^{\mu 0}=\partial_i F^{i0}=\partial_i(E_i)=\nabla\cdot\vec E=J^0=\rho.$$
> Take $\nu=j$:
> > $$\partial_\mu F^{\mu j}=\partial_0 F^{0j}+\partial_i F^{ij}=-(\partial_t E_j)+(\nabla\times \vec B)_j,$$
> hence $\nabla\times\vec B-\partial_t\vec E=\vec J$.

> [!danger] Charge conservation from Maxwell
> Taking the divergence $\partial_\nu$ of $\partial_\mu F^{\mu\nu}=J^\nu$ gives
> > $$\partial_\nu J^\nu = \partial_\nu\partial_\mu F^{\mu\nu}=0,$$
> since $F^{\mu\nu}$ is antisymmetric and partial derivatives commute. Thus Maxwell’s equations imply the continuity equation $\partial_t\rho+\nabla\cdot\vec J=0$. In curved spacetime, the same identity becomes $\nabla_\nu J^\nu=0$.

### Gauge potentials

> [!abstract] Electromagnetic potential
> If $dF=0$, then locally there exists a $1$-form $A$ (the vector potential) such that
> > $$F=dA,\qquad\text{i.e.}\qquad F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu.$$

> [!success] Proofs
> This is the Poincaré lemma on contractible open sets in $\mathbb{R}^4$.

> [!danger] Gauge freedom
> If $A$ is a potential, then so is $A+d\chi$ for any smooth function $\chi$. The physical field $F$ is gauge-invariant. This gauge freedom is not merely aesthetic: it is essential in both classical and quantum electromagnetism and foreshadows the role of connections on principal bundles.

## I.D.2' Recovering the classical Lorentz force in 3-vector form

The covariant Lorentz force should reproduce the familiar equation
$$
\frac{d\vec p}{dt}=q(\vec E+\vec v\times \vec B)
$$
in an inertial frame.

> [!abstract] Lorentz force in 3-vector form
> Let a particle of charge $q$ have worldline with coordinate velocity $\vec v$ in an inertial frame, and let $\vec E,\vec B$ be the fields in that frame defined by $F_{0i}=E_i$ and $F_{ij}=-\varepsilon_{ijk}B_k$. Then the covariant Lorentz force law implies
> > $$\frac{d\vec p}{dt}=q(\vec E+\vec v\times \vec B),$$
> and the energy equation
> > $$\frac{dE}{dt}=q\,\vec E\cdot \vec v.$$

> [!success] Proofs
> Start from $dp^\mu/d\tau=qF^\mu{}_\nu U^\nu$ and divide by $dt/d\tau=\gamma$:
> > $$\frac{dp^\mu}{dt}=\frac{q}{\gamma}F^\mu{}_\nu U^\nu.$$
> Using $U^\nu=(\gamma,\gamma\vec v)$ gives
> > $$\frac{dp^\mu}{dt}=qF^\mu{}_\nu (1,\vec v)^\nu.$$
> Now split into $\mu=0$ and $\mu=i$.
>
> For $\mu=0$,
> > $$\frac{dE}{dt}=\frac{dp^0}{dt}=qF^0{}_\nu(1,\vec v)^\nu=qF^0{}_i v^i,$$
> and with $F^{0i}=-E_i$ and $F^0{}_i=F^{0i}$ this gives $dE/dt=q\,\vec E\cdot\vec v$ (consistent with the Maxwell convention used above).
>
> For $\mu=i$,
> > $$\frac{dp^i}{dt}=q\bigl(F^i{}_0+F^i{}_j v^j\bigr).$$
> Using $F^i{}_0=E_i$ and $F^i{}_j=F^{ij}=F_{ij}=-\varepsilon_{ij\ell}B_\ell$ yields
> > $$\frac{dp^i}{dt}=q\left(E_i-\varepsilon_{ij\ell}B_\ell v^j\right)=q\left(E_i+(\vec v\times \vec B)_i\right),$$
> i.e. $d\vec p/dt=q(\vec E+\vec v\times\vec B)$.

> [!danger] Power comes only from $\vec E$
> The identity $dE/dt=q\,\vec E\cdot \vec v$ shows that magnetic fields do no work: the magnetic force is always orthogonal to $\vec v$ and hence cannot change the energy $E$. In covariant language, this is encoded by antisymmetry of $F$ and the orthogonality constraints.

## I.D.4 Action principles and a Noether preview

Action principles are useful because they produce equations of motion by a single variational rule and make symmetries manifest. For relativistic dynamics, the correct actions are built from invariant geometric quantities.

### Particle actions

> [!info] Free particle action revisited
> The action of a free massive particle is
> > $$S_{\mathrm{free}}[\gamma]= -m\int \sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda= -m\int d\tau.$$

> [!info] Minimal coupling to electromagnetism
> Let $A$ be a potential $1$-form with $F=dA$. The action for a particle of charge $q$ moving in the electromagnetic field is
> > $$S[\gamma]= -m\int d\tau \;-\; q\int_\gamma A = -m\int \sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda \;-\; q\int A_\mu \dot x^\mu\,d\lambda.$$

> [!danger] Gauge invariance
> Under the gauge transformation $A\mapsto A+d\chi$, the action changes by $-q\int_\gamma d\chi=-q(\chi(q)-\chi(p))$, a boundary term depending only on endpoints. Hence the Euler–Lagrange equations are gauge-invariant.

> [!note] Lorentz force from the action
> The Euler–Lagrange equations of the particle action are exactly
> > $$m\frac{dU^\mu}{d\tau}=qF^\mu{}_\nu U^\nu.$$

> [!success] Proofs
> Work in inertial coordinates and take $\lambda$ as a general parameter. The Lagrangian is
> > $$L(x,\dot x)= -m\sqrt{-\eta_{\mu\nu}\dot x^\mu\dot x^\nu}-qA_\mu(x)\dot x^\mu.$$
> Compute
> > $$\frac{\partial L}{\partial \dot x^\mu}=
> -m\frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta(\dot x,\dot x)}} - qA_\mu,\qquad
> \frac{\partial L}{\partial x^\mu}=-q\,(\partial_\mu A_\nu)\dot x^\nu.$$
> Euler–Lagrange gives
> > $$\frac{d}{d\lambda}\left(
> -m\frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta(\dot x,\dot x)}} - qA_\mu
> \right)
> =
> -q(\partial_\mu A_\nu)\dot x^\nu.$$
> Expanding the derivative and canceling the $-q\,\partial_\alpha A_\mu\,\dot x^\alpha$ term yields
> > $$m\frac{d}{d\lambda}\left(\frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta(\dot x,\dot x)}}\right)
> =
> q(\partial_\mu A_\nu-\partial_\nu A_\mu)\dot x^\nu
> =
> qF_{\mu\nu}\dot x^\nu.$$
> Choosing $\lambda=\tau$ gives $\sqrt{-\eta(\dot x,\dot x)}=1$ and $\dot x^\nu=U^\nu$, hence
> > $$m\frac{d}{d\tau}(\eta_{\mu\nu}U^\nu)=qF_{\mu\nu}U^\nu,$$
> and raising the index yields $m\,dU^\mu/d\tau=qF^\mu{}_\nu U^\nu$.

### Field action (preview) and Noether's theorem

> [!info] Maxwell action (vacuum + sources)
> Let $A$ be a potential $1$-form and $F=dA$. The Maxwell action is
> > $$S_{\mathrm{Max}}[A]=-\frac14\int_{\mathbb{R}^{1,3}} F_{\mu\nu}F^{\mu\nu}\,d^4x \;-\;\int_{\mathbb{R}^{1,3}} J^\mu A_\mu\,d^4x.$$

> [!danger] What varies
> Varying $A$ (with compactly supported variations) yields $\partial_\mu F^{\mu\nu}=J^\nu$. The homogeneous equation $dF=0$ is built in by defining $F=dA$. In more geometric language: Maxwell’s theory is a theory of a connection $A$ on a $U(1)$-bundle, but in Minkowski space we can treat everything globally as forms on $\mathbb{R}^4$.

> [!note] Maxwell equations from the Maxwell action
> Critical points of the Maxwell action satisfy $\partial_\mu F^{\mu\nu}=J^\nu$, hence Maxwell’s equations.

> [!success] Proofs
> Let $A\mapsto A+\varepsilon a$ where $a$ is a compactly supported $1$-form. Then $F\mapsto F+\varepsilon\,da$, i.e. $(\delta F)_{\mu\nu}=\partial_\mu a_\nu-\partial_\nu a_\mu$. Compute
> > $$\delta S = -\frac14\int 2F^{\mu\nu}\delta F_{\mu\nu}\,d^4x - \int J^\mu a_\mu\,d^4x
> = -\frac12\int F^{\mu\nu}(\partial_\mu a_\nu-\partial_\nu a_\mu)\,d^4x - \int J^\mu a_\mu\,d^4x.$$
> By antisymmetry of $F^{\mu\nu}$, $F^{\mu\nu}(\partial_\mu a_\nu-\partial_\nu a_\mu)=2F^{\mu\nu}\partial_\mu a_\nu$, so
> > $$\delta S = -\int F^{\mu\nu}\partial_\mu a_\nu\,d^4x - \int J^\nu a_\nu\,d^4x.$$
> Integrate by parts (boundary term vanishes by compact support):
> > $$\delta S = \int (\partial_\mu F^{\mu\nu})a_\nu\,d^4x - \int J^\nu a_\nu\,d^4x
> = \int (\partial_\mu F^{\mu\nu}-J^\nu)a_\nu\,d^4x.$$
> Since $a$ is arbitrary, $\partial_\mu F^{\mu\nu}=J^\nu$.

> [!danger] Noether preview
> The Poincaré group acts on Minkowski spacetime and on fields by pullback. If the total action (particles + fields) is invariant under:
> - translations $\Rightarrow$ conservation of energy–momentum;
> - Lorentz transformations $\Rightarrow$ conservation of angular momentum (including boosts).
>
> We will make this precise in the next lecture using the stress–energy tensor, which is the local density whose divergence-free property encodes these conservation laws.