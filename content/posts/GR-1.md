+++
date = "2025-02-06T15:44:10-04:00"
draft = false
title = "Minkowski Space and the First Geometry of Relativity"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

General relativity is often introduced as “curved spacetime,” but curvature is not where the conceptual leap begins. The leap begins earlier: we decide that **time is measured by clocks carried along worldlines**, and we encode that decision geometrically. In flat spacetime, the geometry is not Euclidean but **Lorentzian**; the metric does not merely measure lengths, it also divides directions into timelike/null/spacelike and thereby produces the light cone. This causal split is the mathematical shadow of a physical statement: information and influence do not propagate arbitrarily fast.

In this lecture we build the flat model: Minkowski space. We will treat it in a way that can later be repeated verbatim on a curved spacetime $(M,g)$ by replacing $(\mathbb{R}^{1,3},\eta)$ with $(T_pM,g_p)$ pointwise. Along the way we keep one guiding principle in mind:

> [!important] Guiding Principle
> A Lorentzian metric is a device for turning tangent vectors into clock readings and causal statements.

## Conventions and Notation

We work in $3+1$ dimensions and use units in which $c=1$. The signature convention is
$$(-,+,+,+).$$
We write a typical vector as $v=(v^0,v^1,v^2,v^3)$, and interpret $v^0$ as the time component in a chosen inertial coordinate system. Greek indices $\mu,\nu,\ldots$ range over $\{0,1,2,3\}$ and Latin indices $i,j,\ldots$ range over $\{1,2,3\}$. We use Einstein summation. For spatial vectors we write $\mathbf{v}=(v^1,v^2,v^3)$ and $|\mathbf{v}|^2=\sum_{i=1}^3 (v^i)^2$.

> [!danger] Signature Convention
> Changing the signature convention changes various signs but not the geometry. What matters is that the metric have one negative and three positive directions (Lorentzian signature).

## Minkowski Space as a Lorentzian Vector Space and Affine Spacetime

> [!info] Minkowski Metric and Minkowski Space
> Let $\eta$ be the bilinear form on $\mathbb{R}^4$ given by
> $$\eta(v,w):=-v^0w^0+v^1w^1+v^2w^2+v^3w^3.$$
> We call $(\mathbb{R}^4,\eta)$ a **Lorentzian inner product space** and denote it by $(\mathbb{R}^{1,3},\eta)$.

> [!danger] Vector Space vs. Spacetime
> The phrase “Minkowski spacetime” usually refers to the **affine** space underlying $\mathbb{R}^4$ equipped with the translation-invariant Lorentzian metric $\eta$. The tangent space at every event is naturally identified with $\mathbb{R}^{1,3}$ by translation. This distinction becomes essential in curved spacetimes: the tangent space $T_pM$ is always a vector space, but the manifold $M$ is not.

## Causal Character and the Light Cone

> [!info] Timelike, Null, and Spacelike
> A nonzero vector $v\in\mathbb{R}^{1,3}$ is called
> 1. **timelike** if $\eta(v,v)<0$,
> 2. **null** (or **lightlike**) if $\eta(v,v)=0$,
> 3. **spacelike** if $\eta(v,v)>0$.
> By convention $0$ is called spacelike.

> [!info] Time Orientation in Minkowski Space
> A causal (timelike or null) vector $v$ is **future-directed** if $v^0>0$ and **past-directed** if $v^0<0$. This choice specifies a **time orientation**.

> [!note] A Useful Inequality for Causal Vectors
> If $v$ is future-directed causal, then $v^0\ge |\mathbf{v}|$, with equality iff $v$ is null.

> [!success] Proof
> Causality means $\eta(v,v)\le 0$, i.e.
> $$-(v^0)^2+|\mathbf{v}|^2\le 0 \quad\Longleftrightarrow\quad (v^0)^2\ge |\mathbf{v}|^2.$$
> Future-directedness implies $v^0\ge 0$, hence $v^0\ge |\mathbf{v}|$. Equality holds exactly when $\eta(v,v)=0$.

> [!danger] Why the Light Cone Matters
> In Euclidean geometry, there is no intrinsic distinction between directions. In Lorentzian geometry, the light cone is an invariant geometric object: it is preserved by all symmetries of $\eta$. Physically, it encodes the causal structure: what can influence what. Mathematically, it is the structure that will survive on a curved spacetime even when no global inertial coordinates exist.

## Basic Inequalities and Orthogonal Complements

The next statements are purely linear algebra, but they already carry physical meaning. They will later be applied with $\eta$ replaced by $g_p$ at each point.

> [!abstract] Lorentzian Cauchy–Schwarz for Timelike Vectors
> Let $u,v\in\mathbb{R}^{1,3}$ be future-directed timelike vectors. Then
> $$-\eta(u,v)\ge \sqrt{-\eta(u,u)}\,\sqrt{-\eta(v,v)},$$
> with equality iff $u$ and $v$ are positive scalar multiples of each other. In particular, for future-directed **unit** timelike vectors (i.e. $\eta(u,u)=\eta(v,v)=-1$) one has $-\eta(u,v)\ge 1$.

> [!success] Proof
> Let $\alpha=\sqrt{-\eta(u,u)}>0$ and set $\hat u=u/\alpha$, so $\eta(\hat u,\hat u)=-1$. Choose an $\eta$-orthonormal basis $\{e_0,e_1,e_2,e_3\}$ with $e_0$ future-directed timelike and $\hat u=e_0$. Write $v=v^0e_0+\sum_{i=1}^3 v^i e_i$. Since $v$ is timelike, $-(v^0)^2+\sum_{i=1}^3 (v^i)^2<0$, hence $(v^0)^2>\sum_{i=1}^3 (v^i)^2$ and in particular $v^0\neq 0$. Future-directedness implies $v^0>0$.
> 
> Now $\eta(\hat u,v)=\eta(e_0,v)=-v^0$, so $-\eta(\hat u,v)=v^0$. Also
> $$-\eta(v,v)=(v^0)^2-\sum_{i=1}^3 (v^i)^2 \le (v^0)^2,$$
> hence $v^0\ge \sqrt{-\eta(v,v)}$.
> 
> Multiplying by $\alpha$ yields
> $$-\eta(u,v)= -\eta(\alpha\hat u,v)=\alpha\cdot(-\eta(\hat u,v))=\alpha v^0 \ge \alpha\sqrt{-\eta(v,v)}=\sqrt{-\eta(u,u)}\sqrt{-\eta(v,v)}.$$
> Equality forces $v^i=0$ for all $i$, hence $v$ is a positive multiple of $e_0=\hat u$.

> [!danger] Hyperbolic Angle and Relative Motion
> For unit future-directed timelike vectors $u,v$, the inequality says $-\eta(u,v)\ge 1$. It is convenient to define the **hyperbolic angle** (rapidity) $\varphi\ge 0$ by
> $$-\eta(u,v)=\cosh\varphi.$$
> This number will become a coordinate-free measure of relative motion between observers.

> [!abstract] Orthogonal Complements and Induced Metrics
> Let $v\in\mathbb{R}^{1,3}$ be nonzero and define $v^\perp:=\{w\in\mathbb{R}^{1,3}:\eta(v,w)=0\}$.
> 1. If $v$ is timelike, then $\eta$ restricts to a positive definite inner product on $v^\perp$.
> 2. If $v$ is spacelike, then $\eta|_{v^\perp}$ has signature $(-,+,+)$.
> 3. If $v$ is null, then $\eta|_{v^\perp}$ is degenerate and $v\in v^\perp$.

> [!success] Proof
> Choose an $\eta$-orthonormal basis adapted to $v$.
> 
> If $v$ is timelike, we may take $v=\alpha e_0$ with $\eta(e_0,e_0)=-1$ and $\eta(e_i,e_i)=+1$ for $i\ge 1$. Then $v^\perp=\mathrm{span}\{e_1,e_2,e_3\}$ and $\eta$ is positive definite there.
> 
> If $v$ is spacelike, take $v=\beta e_1$; then $v^\perp=\mathrm{span}\{e_0,e_2,e_3\}$ with signature $(-,+,+)$.
> 
> If $v$ is null, choose a null frame $(\ell,n,e_2,e_3)$ with $\eta(\ell,\ell)=\eta(n,n)=0$, $\eta(\ell,n)=-1$ and $\eta(e_i,e_i)=1$, and take $v=\ell$; then $\ell\in \ell^\perp$ and the restriction is degenerate.

> [!danger] The Observer’s “Space”
> If $U$ is a unit timelike vector, then $U^\perp$ is a Euclidean $3$-space with inner product $\eta|_{U^\perp}$. This is the clean mathematical model of an observer’s instantaneous rest space. On a curved spacetime $(M,g)$, the same construction produces a Euclidean inner product on $U^\perp\subset T_pM$.

## Intervals and Causal Relations in Minkowski Spacetime

Now we switch to the affine viewpoint. Let $p,q$ be events in Minkowski spacetime. The displacement vector $q-p\in\mathbb{R}^{1,3}$ is well-defined by translation.

> [!info] Squared Interval
> For events $p,q\in\mathbb{R}^4$ we define the **squared interval**
> $$s^2(p,q):=\eta(q-p,q-p).$$

> [!info] Causal Separation of Events
> Distinct events $p\neq q$ are called
> 1. **timelike separated** if $s^2(p,q)<0$,
> 2. **null separated** if $s^2(p,q)=0$,
> 3. **spacelike separated** if $s^2(p,q)>0$.

To connect this to the usual picture, write $q-p=(\Delta t,\Delta \mathbf{x})$. Then
$$s^2(p,q)=-(\Delta t)^2+|\Delta\mathbf{x}|^2.$$
Timelike separation means $|\Delta\mathbf{x}|<|\Delta t|$ (inside the light cone), null separation means $|\Delta\mathbf{x}|=|\Delta t|$ (on the light cone), and spacelike separation means $|\Delta\mathbf{x}|>|\Delta t|$ (outside).

> [!info] Chronological and Causal Futures
> For $p\in\mathbb{R}^4$ define
> $$I^+(p):=\{q\in\mathbb{R}^4:q-p \text{ is future-directed timelike}\},\quad J^+(p):=\{q\in\mathbb{R}^4:q-p \text{ is future-directed causal}\},$$
> and similarly $I^-(p),J^-(p)$ with “future” replaced by “past.”

> [!abstract] Basic Topological Properties in Minkowski Spacetime
> For each event $p$:
> 1. $I^+(p)$ is open and $J^+(p)$ is closed.
> 2. $\partial I^+(p)=\partial J^+(p)$ is the future null cone based at $p$.

> [!success] Proof
> The map $q\mapsto \eta(q-p,q-p)$ is continuous. Then $I^+(p)=\{q:\ \eta(q-p,q-p)<0,\ q^0>p^0\}$ is an intersection of two open sets, hence open. Similarly $J^+(p)=\{q:\ \eta(q-p,q-p)\le 0,\ q^0\ge p^0\}$ is an intersection of closed sets, hence closed. The boundary statement follows because $\eta(q-p,q-p)=0$ describes the null cone and separates the strict inequality from its complement.

> [!danger] What Survives in Curved Spacetime
> On a general Lorentzian manifold $(M,g)$ there is no global “$q-p$” vector. Instead, $I^\pm(p)$ and $J^\pm(p)$ are defined using future-directed timelike/causal **curves**. In Minkowski space, these curve-based definitions coincide with the simple translation-based formulas above.

## Proper Time: Clocks, Worldlines, and Extremal Principles

We now formalize the slogan: **the metric tells a clock what to read**. A massive particle traces a timelike worldline; the time measured by an ideal clock carried with the particle is the **proper time**.

> [!info] Proper Time of a Timelike Curve
> Let $\gamma:[a,b]\to\mathbb{R}^4$ be a piecewise $C^1$ future-directed timelike curve. Its proper time length is
> $$\tau(\gamma):=\int_a^b \sqrt{-\eta(\dot\gamma(\lambda),\dot\gamma(\lambda))}\,d\lambda.$$
> If $\lambda=\tau$ is chosen so that $\sqrt{-\eta(\dot\gamma,\dot\gamma)}\equiv 1$, then $\tau$ is called **proper time parameter**.

> [!info] Four-Velocity and Four-Acceleration
> If $\gamma$ is parameterized by proper time, define the **four-velocity** $U$ and **four-acceleration** $A$ by
> $$U:=\frac{d\gamma}{d\tau},\quad A:=\frac{dU}{d\tau}.$$
> Then $\eta(U,U)=-1$ along the curve.

> [!abstract] Four-Acceleration Is Orthogonal to Four-Velocity
> Along a proper-time-parameterized timelike curve one has $\eta(A,U)=0$.

> [!success] Proof
> Differentiate $\eta(U,U)=-1$ with respect to $\tau$:
> $$0=\frac{d}{d\tau}\eta(U,U)=2\eta\left(\frac{dU}{d\tau},U\right)=2\eta(A,U).$$

This already has physical content: in the instantaneous rest space $U^\perp$, acceleration has no time component. In other words, “acceleration is spatial” once an observer is chosen.

A second, deeper piece of physics is that inertial motion is characterized by an extremal property of the proper-time functional. This is the cleanest entrance to the variational viewpoint that will later produce the Einstein equation from an action.

> [!abstract] Timelike Straight Lines Are Extremals of Proper Time
> Fix events $p,q\in\mathbb{R}^4$ with $q\in I^+(p)$. Among all piecewise $C^1$ future-directed timelike curves $\gamma$ from $p$ to $q$, the proper time $\tau(\gamma)$ is extremized by timelike straight segments.

> [!success] Proof
> Write $\gamma(\lambda)=(t(\lambda),\mathbf{x}(\lambda))$. Since $\gamma$ is future-directed timelike, $t$ is strictly increasing; reparameterize by coordinate time so that $\lambda=t$. Then $\gamma(t)=(t,\mathbf{x}(t))$ with $|\mathbf{x}'(t)|<1$, and
> $$\tau(\gamma)=\int_{t_p}^{t_q} \sqrt{1-|\mathbf{x}'(t)|^2}\,dt.$$
> The Euler–Lagrange equation for the Lagrangian $L(\mathbf{x},\mathbf{x}')=\sqrt{1-|\mathbf{x}'|^2}$ gives
> $$\frac{d}{dt}\left(\frac{\mathbf{x}'(t)}{\sqrt{1-|\mathbf{x}'(t)|^2}}\right)=0,$$
> hence $\mathbf{x}'(t)$ is constant and $\mathbf{x}(t)$ is affine. Therefore $\gamma$ is a straight segment in spacetime.

In Minkowski space one can say more: straight timelike segments do not merely extremize proper time; they **maximize** it. This is the mathematical core of the twin paradox (and later, of focusing and conjugate points in curved spacetimes).

> [!abstract] Timelike Straight Segments Maximize Proper Time
> Let $p,q\in\mathbb{R}^4$ with $q\in I^+(p)$. For any piecewise $C^1$ future-directed timelike curve $\gamma$ from $p$ to $q$,
> $$\tau(\gamma)\le \sqrt{-\eta(q-p,q-p)}.$$
> Equality holds iff $\gamma$ is a reparameterized timelike straight segment.

> [!success] Proof
> As above, parameterize by $t=x^0$ so that
> $$\tau(\gamma)=\int_{t_p}^{t_q}\sqrt{1-|\mathbf{x}'(t)|^2}\,dt.$$
> The function $f(s)=\sqrt{1-s^2}$ is concave on $[0,1)$. By Jensen’s inequality,
> $$\frac{1}{t_q-t_p}\int_{t_p}^{t_q} f(|\mathbf{x}'(t)|)\,dt \le f\!\left(\frac{1}{t_q-t_p}\int_{t_p}^{t_q}|\mathbf{x}'(t)|\,dt\right).$$
> Since $\int |\mathbf{x}'(t)|\,dt \ge \left|\int \mathbf{x}'(t)\,dt\right|=|\mathbf{x}(t_q)-\mathbf{x}(t_p)|$, we obtain
> $$\tau(\gamma)\le (t_q-t_p)\sqrt{1-\left|\frac{\mathbf{x}(t_q)-\mathbf{x}(t_p)}{t_q-t_p}\right|^2}=\sqrt{(t_q-t_p)^2-|\mathbf{x}(t_q)-\mathbf{x}(t_p)|^2}=\sqrt{-\eta(q-p,q-p)}.$$
> Equality forces $|\mathbf{x}'(t)|$ to be constant and $\mathbf{x}'(t)$ to have constant direction, hence $\mathbf{x}(t)$ affine.

> [!example] Twin Paradox in One Inequality
> Two timelike curves connect the same endpoints $p$ and $q$: one is inertial (straight), the other involves a turnaround (non-straight). The proposition says the inertial observer experiences strictly more proper time. The “paradox” disappears because the non-inertial path is not related to the inertial one by a symmetry of Minkowski space.

## Lorentz Transformations: Why Boosts Look the Way They Do

We now turn to symmetries. A change of inertial coordinates should preserve the causal structure (light cones) and the proper-time functional. In Minkowski space, this translates into preserving the bilinear form $\eta$.

> [!info] Lorentz Group
> The **Lorentz group** is
> $$O(1,3):=\{\Lambda\in GL(4,\mathbb{R}) : \Lambda^T\eta\Lambda=\eta\}.$$

> [!abstract] Preservation of Intervals and Causal Character
> If $\Lambda\in O(1,3)$ then $\eta(\Lambda v,\Lambda w)=\eta(v,w)$ for all $v,w$. In particular, $\eta(v,v)$ and its sign are preserved, so timelike/null/spacelike vectors remain timelike/null/spacelike.

> [!success] Proof
> Rewrite $\Lambda^T\eta\Lambda=\eta$ as $\eta(\Lambda v,\Lambda w)=\eta(v,w)$ by expanding both sides in coordinates.

To make contact with familiar formulas, consider a boost in the $x^1$-direction. Introduce a parameter $\beta\in(-1,1)$ and set $\gamma=(1-\beta^2)^{-1/2}$. Define
$$\Lambda(\beta)=\begin{pmatrix}\gamma & -\gamma\beta & 0 & 0\\ -\gamma\beta & \gamma & 0 & 0\\ 0&0&1&0\\ 0&0&0&1\end{pmatrix}.$$

> [!abstract] Standard Boost Is Lorentz
> $\Lambda(\beta)\in O(1,3)$ for every $\beta\in(-1,1)$.

> [!success] Proof
> A direct multiplication shows $\Lambda(\beta)^T\eta\Lambda(\beta)=\eta$. Equivalently, it suffices to check the $2\times 2$ block preserves $-(dx^0)^2+(dx^1)^2$, which holds because $\gamma^2(1-\beta^2)=1$.

> [!danger] Rapidity and Hyperbolic Rotations
> Define the **rapidity** $\varphi\in\mathbb{R}$ by $\beta=\tanh\varphi$. Then $\gamma=\cosh\varphi$ and $\gamma\beta=\sinh\varphi$, and the boost becomes a hyperbolic rotation in the $(x^0,x^1)$-plane:
> $$\begin{pmatrix}\bar x^0\\ \bar x^1\end{pmatrix}=\begin{pmatrix}\cosh\varphi&-\sinh\varphi\\ -\sinh\varphi&\cosh\varphi\end{pmatrix}\begin{pmatrix}x^0\\ x^1\end{pmatrix}.$$
> This is not a stylistic trick: it linearizes composition.

> [!abstract] Composition Law and Velocity Addition
> Boosts add in rapidity:
> $$\Lambda(\varphi_1)\Lambda(\varphi_2)=\Lambda(\varphi_1+\varphi_2).$$
> Equivalently, in terms of $\beta=\tanh\varphi$, the induced velocity-addition law is
> $$\beta_{12}=\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}.$$

> [!success] Proof
> The rapidity formula follows from the addition identities for $\cosh$ and $\sinh$. Applying $\tanh$ to $\varphi_1+\varphi_2$ gives the velocity-addition law.

## Classical Kinematic Effects as Computations

Once boosts are understood as Lorentz transformations, time dilation, length contraction, and relativity of simultaneity are not separate postulates; they are algebra.

Write the boost in coordinates as
$$\bar t=\gamma(t-\beta x),\quad \bar x=\gamma(x-\beta t),\quad \bar y=y,\quad \bar z=z.$$

> [!abstract] Time Dilation
> If a clock is at rest in the barred frame (so $\Delta\bar x=\Delta\bar y=\Delta\bar z=0$), then
> $$\Delta t=\gamma\,\Delta\bar t.$$

> [!success] Proof
> From $\Delta\bar x=\gamma(\Delta x-\beta\Delta t)=0$ we get $\Delta x=\beta\Delta t$. Then
> $$\Delta\bar t=\gamma(\Delta t-\beta\Delta x)=\gamma(\Delta t-\beta^2\Delta t)=\gamma(1-\beta^2)\Delta t=\Delta t/\gamma.$$

> [!abstract] Relativity of Simultaneity
> If two events are simultaneous in the barred frame (so $\Delta\bar t=0$), then their time separation in the unbarred frame is
> $$\Delta t=\beta\,\Delta x.$$

> [!success] Proof
> $\Delta\bar t=\gamma(\Delta t-\beta\Delta x)=0$ implies $\Delta t=\beta\Delta x$.

> [!abstract] Length Contraction
> Let a rigid rod be at rest in the barred frame with rest length $L_0$, meaning that two events on the rod’s endpoints satisfy $\Delta\bar t=0$ and $\Delta\bar x=L_0$. Then the length measured in the unbarred frame at unbarred simultaneity ($\Delta t=0$) is
> $$L=\frac{L_0}{\gamma}.$$

> [!success] Proof
> Unbarred simultaneity means $\Delta t=0$. Then $\Delta\bar x=\gamma(\Delta x-\beta\Delta t)=\gamma\Delta x$, so $\Delta x=\Delta\bar x/\gamma=L_0/\gamma$.

> [!danger] Remark
> These three computations illustrate a theme that will persist in curved spacetime: “what is measured” is always tied to a choice of observer, and the observer enters through a timelike direction.

## Observers and the Rest Frame as Geometry

> [!info] Observer at an Event
> An **observer** at an event is a future-directed **unit** timelike vector $U\in\mathbb{R}^{1,3}$, i.e. $\eta(U,U)=-1$ and $U^0>0$.

The normalization $\eta(U,U)=-1$ is the statement that $U$ is a four-velocity: it is the tangent vector to a worldline parameterized by proper time.

> [!abstract] Rest Space
> Let $U$ be a unit timelike vector. Then the orthogonal complement
> $$U^\perp=\{W\in\mathbb{R}^{1,3}:\eta(U,W)=0\}$$
> is a three-dimensional Euclidean vector space with inner product $\eta|_{U^\perp}$.

> [!success] Proof
> This is the timelike case of the orthogonal-complement proposition proved earlier.

> [!danger] What Is a “Rest Frame”?
> A rest frame is not fundamentally a coordinate system; it is the choice of an observer $U$. Once $U$ is fixed, the observer’s instantaneous space is $U^\perp$, and any orthonormal basis of $U^\perp$ completes $U$ to an $\eta$-orthonormal frame. Choosing coordinates adapted to this frame produces the usual “$U=(1,0,0,0)$” description, but the underlying object is $U$ itself.

> [!abstract] Any Observer Can Be Boosted to Rest
> Let $U$ be a future-directed unit timelike vector. Then there exists $\Lambda\in O(1,3)$ preserving time orientation such that
> $$\Lambda U=(1,0,0,0).$$

> [!success] Proof
> Write $U=(U^0,\mathbf{U})$. Since $\eta(U,U)=-1$, we have $(U^0)^2-|\mathbf{U}|^2=1$ and $U^0>0$.
> 
> Choose a spatial rotation $R\in SO(3)$ sending $\mathbf{U}$ to $(|\mathbf{U}|,0,0)$ and extend it to a Lorentz transformation that acts trivially on $x^0$. After this rotation, $U$ has the form $(U^0,|\mathbf{U}|,0,0)$.
> 
> Let $\beta=|\mathbf{U}|/U^0\in(0,1)$ and apply the standard boost $\Lambda(\beta)$ in the $x^1$ direction. A direct computation gives $\Lambda(\beta)U=(1,0,0,0)$.

## A First Taste of “Measurement” in Invariant Language

Even in flat spacetime, the cleanest way to phrase physical statements is not in terms of coordinate components but in terms of contractions with $U$. This becomes essential on curved spacetimes where there is no global inertial coordinate system.

> [!info] Energy and Frequency Measured by an Observer (Preview)
> Let $U$ be an observer (unit future timelike vector).
> 1. If $P$ is a future-directed timelike vector (think: four-momentum), define the energy measured by $U$ as $$E_U(P):=-\eta(P,U).$$
> 2. If $K$ is a future-directed null vector (think: wave vector of light), define the angular frequency measured by $U$ as $$\omega_U(K):=-\eta(K,U).$$

> [!danger] Remark
> In the rest frame of $U$ one has $U=(1,0,0,0)$, so $E_U(P)=P^0$ and $\omega_U(K)=K^0$. The advantage of the contraction definition is that it is coordinate-free and immediately generalizes to curved spacetime by replacing $\eta$ with $g$.

In this lecture we set up Minkowski spacetime as a Lorentzian model where the metric determines both causal structure (light cones) and clock readings (proper time). We also fixed the basic vocabulary of timelike/null/spacelike directions and the observer viewpoint that will persist throughout GR. Next we make these ideas computational by studying Lorentz transformations, rapidity, and how observers extract measurable quantities from tensors.
