+++
date = "2025-04-06T15:44:10-04:00"
draft = false
title = "Minkowski Spacetime and Causal Structure"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity" ]
+++
## Guiding idea: clocks, light, and geometry

Special relativity is often introduced as a pair of physical principles: (i) **relativity**: the laws of physics take the same form in all inertial frames; (ii) **constancy of the speed of light**: light in vacuum propagates at a fixed speed (independent of the source). The mathematical content of these principles is that spacetime is modelled by an affine space equipped with a nondegenerate bilinear form of Lorentzian signature, and that inertial frames correspond to affine coordinates in which this form has constant components.

Throughout Phase I we adopt units with $c=1$ and the “mostly plus” signature $(-,+,+,+)$.

## Minkowski spacetime as an affine Lorentzian space

> [!info] Minkowski Spacetime
> Let $V$ be a $4$-dimensional real vector space equipped with a nondegenerate symmetric bilinear form $\eta:V\times V\to\mathbb{R}$ of signature $(-,+,+,+)$.  
> **Minkowski spacetime** is an affine space $\mathbb{M}^{1,3}$ modeled on $V$, together with $\eta$.  
> An **inertial coordinate system** is an affine coordinate chart $x=(x^0,x^1,x^2,x^3):\mathbb{M}^{1,3}\to\mathbb{R}^4$ such that, in the associated coordinate basis,
> $$\eta_{\mu\nu}=\mathrm{diag}(-1,1,1,1),\qquad
> \eta=\eta_{\mu\nu}dx^\mu\otimes dx^\nu=-(dx^0)^2 + (dx^1)^2+(dx^2)^2+(dx^3)^2.$$
> We often write $x^0=t$ and $(x^1,x^2,x^3)=\vec{x}$.

> [!danger] Events vs. Displacement Vectors
> Points of $\mathbb{M}^{1,3}$ are **events**. If $p,q\in\mathbb{M}^{1,3}$ then the difference $q-p\in V$ is a displacement vector. The bilinear form $\eta$ acts on displacement vectors, not on events. This affine/linear distinction is conceptually useful when discussing translations and the Poincaré group later.

> [!info] Invariant Interval
> Given two events $p,q\in\mathbb{M}^{1,3}$, define the (squared) **invariant interval**
> $$s^2(p,q) \coloneqq \eta(q-p,q-p).$$
> In inertial coordinates $x^\mu$, writing $\Delta x^\mu = x^\mu(q)-x^\mu(p)$, we have
> $$s^2(p,q)=-(\Delta t)^2+\|\Delta\vec{x}\|^2.$$

> [!danger] Physical Meaning
> The expression $s^2(p,q) = -(\Delta t)^2 + \|\Delta\vec{x}\|^2$ packages a great deal of physics:
> - Light rays satisfy $s^2=0$ (null separation).
> - Massive particles move along timelike worldlines, which satisfy $s^2<0$ for nearby points on the worldline.
> - Spacelike separation $s^2>0$ means no causal influence can connect the two events in flat spacetime.
>
> Much of special relativity is the systematic exploitation of these three cases.

## Timelike, null, and spacelike: cones and causality

> [!info] Causal Character
> Let $v\in V$ be nonzero. We call $v$ **timelike** if $\eta(v,v)<0$, **null/lightlike** if $\eta(v,v)=0$, and **spacelike** if $\eta(v,v)>0$.  
> A $C^1$ curve $\gamma:I\to\mathbb{M}^{1,3}$ is timelike/null/spacelike if $\dot\gamma(\lambda)$ is so for each $\lambda\in I$.

> [!info] Future Direction and Time Orientation
> In an inertial coordinate system $x^\mu=(t,\vec{x})$, a nonzero timelike or null vector $v$ is **future-directed** if its $t$-component is positive: $v^0>0$.  
> This choice defines the standard time orientation on Minkowski spacetime.

> [!info] Chronological and Causal Futures in Minkowski Space
> Let $p\in\mathbb{M}^{1,3}$. Define the **chronological future** and **causal future** of $p$ by
> $$I^+(p) \coloneqq \{q: \exists \text{ future-directed timelike curve from $p$ to $q$}\}$$
> $$J^+(p) \coloneqq \{q: \exists \text{ future-directed causal curve from $p$ to $q$}\}.$$
> Define $I^-(p),J^-(p)$ similarly using past-directed curves.

In Minkowski space these sets admit a concrete description.

> [!abstract] Explicit Description of $I^+(p)$ and $J^+(p)$
> Fix an inertial coordinate system and let $p=(t_p,\vec{x}_p)$. Then
> $$I^+(p)=\{(t,\vec{x}): t-t_p > \|\vec{x}-\vec{x}_p\|\},\quad
> J^+(p)=\{(t,\vec{x}): t-t_p \ge \|\vec{x}-\vec{x}_p\|\}.$$
> In particular, the boundary $\partial J^+(p)$ is the (future) light cone of $p$.

> [!success] Proofs
> Write $\Delta t=t-t_p$ and $\Delta\vec{x}=\vec{x}-\vec{x}_p$. A future-directed causal curve from $p$ to $q$ exists in Minkowski spacetime exactly when $q-p$ is future-directed timelike or null, which in inertial coordinates is equivalent to $\Delta t\ge 0$ and $-(\Delta t)^2+\|\Delta\vec{x}\|^2\le 0$, i.e. $\Delta t\ge\|\Delta\vec{x}\|$. Strict inequality corresponds to timelike separation and hence $I^+(p)$.

> [!danger] Open/Closed Properties
> From the explicit description one immediately reads: $I^+(p)$ is open, $J^+(p)$ is closed, and $J^+(p)=\overline{I^+(p)}$ in Minkowski spacetime. In curved spacetimes these properties become subtle and lead to the hierarchy of causal conditions.

## Proper time and the geometry of clocks

A foundational physical premise is that an ideal clock carried by an observer measures **proper time** along the observer’s worldline. In Minkowski spacetime this is a purely geometric quantity.

> [!info] Proper Time Along a Timelike Curve
> Let $\gamma:[\lambda_0,\lambda_1]\to\mathbb{M}^{1,3}$ be a future-directed $C^1$ timelike curve. Its **proper time** is
> $$\tau(\gamma)
> \coloneqq \int_{\lambda_0}^{\lambda_1} \sqrt{-\,\eta(\dot{\gamma}(\lambda),\dot{\gamma}(\lambda))}\,d\lambda.$$
> Equivalently, in inertial coordinates,
> $$\tau(\gamma)=\int_{\lambda_0}^{\lambda_1} \sqrt{\Bigl(\frac{dt}{d\lambda}\Bigr)^2
> -\Bigl\|\frac{d\vec{x}}{d\lambda}\Bigr\|^2}\,d\lambda
> =\int \sqrt{1-\|\vec{v}(t)\|^2}\,dt,$$
> where $\vec{v}(t)=\frac{d\vec{x}}{dt}$ is the coordinate velocity.

> [!danger] Why the Square Root Looks Like This
> The integrand is the Lorentzian analog of speed. In our signature convention, timelike vectors have negative norm-squared, so $-\eta(\dot\gamma,\dot\gamma)>0$ and the square root is real. The proper time is invariant under Lorentz transformations and hence has an observer-independent meaning: it is what a clock measures along $\gamma$.

> [!example] Constant Velocity Motion and Time Dilation
> Let $\gamma(t)=(t,\vec{x}(t))$ be a worldline with constant coordinate velocity $\vec{v}$: $\vec{x}(t)=\vec{x}_0+\vec{v}t$, with $\|\vec{v}\|<1$. Then
> > $$\tau = \int_{t_0}^{t_1}\sqrt{1-\|\vec{v}\|^2}\,dt
> = (t_1-t_0)\sqrt{1-\|\vec{v}\|^2}
> = \frac{t_1-t_0}{\gamma},\qquad \gamma\coloneqq \frac{1}{\sqrt{1-\|\vec{v}\|^2}}.$$
> Thus, for fixed coordinate time interval $\Delta t$, the moving clock measures a smaller proper time $\Delta\tau=\Delta t/\gamma$. This is the geometric content of **time dilation**.

## Inertial observers, simultaneity, and spatial distance

A subtlety (often the first conceptual shock) is that “space at an instant” depends on the observer. Mathematically, an inertial observer is encoded by a unit timelike vector.

> [!info] Inertial Observer and Rest Space
> An **inertial observer** is specified by a future-directed unit timelike vector $u\in V$ with $\eta(u,u)=-1$. The **rest space** (or instantaneous space) of this observer is the $3$-dimensional subspace
> > $$u^\perp \coloneqq \{ w\in V : \eta(u,w)=0\}.$$
> The restriction of $\eta$ to $u^\perp$ is positive definite, hence defines an ordinary Euclidean inner product on $u^\perp$.

> [!abstract] Orthogonal Decomposition
> Let $u$ be a unit timelike vector. Every $v\in V$ decomposes uniquely as
> > $$v = (-\eta(u,v))\,u \;+\; v_\perp,\qquad v_\perp\in u^\perp.$$
> Moreover,
> > $$\eta(v,v) = -\bigl(\eta(u,v)\bigr)^2 + \eta(v_\perp,v_\perp).$$

> [!success] Proofs
> Define $v_\perp \coloneqq v + \eta(u,v)\,u$. Then $\eta(u,v_\perp)=\eta(u,v)+\eta(u,v)\eta(u,u)=0$. Uniqueness follows because $V=\mathrm{span}\{u\}\oplus u^\perp$ (nondegeneracy of $\eta$). The identity for $\eta(v,v)$ is a direct computation using $\eta(u,u)=-1$ and $\eta(u,v_\perp)=0$.

This decomposition encodes the observer’s splitting of any displacement into “time part” and “space part”.

> [!info] Observer Time and Observer-Measured Spatial Length
> Fix a unit timelike $u$. For a displacement $v\in V$:
> - The **observer time** (time separation measured by $u$) is $\Delta t_u(v)\coloneqq -\eta(u,v)$.
> - The **observer spatial displacement** is $v_\perp\in u^\perp$ from the orthogonal decomposition.
> - The **observer spatial length** is $\|v\|_u\coloneqq \sqrt{\eta(v_\perp,v_\perp)}$.

> [!danger] Relativity of Simultaneity
> Two events $p,q$ are **simultaneous for the observer $u$** if $\Delta t_u(q-p)=0$, i.e. $q-p\in u^\perp$. Different observers (different $u$) have different rest spaces $u^\perp$, hence different simultaneity hyperplanes. This is the clean geometric formulation of the **relativity of simultaneity**.

> [!example] Length Contraction from Observer-Dependent Simultaneity
> Consider a rigid rod at rest in an inertial frame with coordinates $(t,x,y,z)$, aligned with the $x$-axis, with endpoints at $x=0$ and $x=L_0$, and $y=z=0$. The rest observer has four-velocity $u=\partial_t$ and measures the rod length at time $t=0$ as $L_0$.
>
> Now consider an observer moving in the $x$-direction with speed $v\in(0,1)$ relative to the rod. The moving observer’s simultaneity hyperplane is tilted in $(t,x)$, so “measuring the rod’s length” requires comparing two events on the endpoints that are simultaneous for this moving observer. Carrying out the standard computation using a Lorentz boost (derived below), one finds the measured length
> > $$L = \frac{L_0}{\gamma},\qquad \gamma=\frac{1}{\sqrt{1-v^2}}.$$
> The key point is not the algebra but the geometry: “length” is an observer-dependent notion because it requires a choice of simultaneity.

## Lorentz transformations as isometries (preview-level derivation)

The set of linear automorphisms of $V$ preserving $\eta$ is the Lorentz group. We postpone its systematic study to I.B, but we record here the basic boost formula since it is used constantly.

> [!abstract] Standard Boost in the $x^1$-Direction
> Fix inertial coordinates $(t,x,y,z)$ and let $v\in(-1,1)$. Define $\gamma=\frac{1}{\sqrt{1-v^2}}$ and new coordinates $(t',x',y',z')$ by
> > $$t'=\gamma(t-vx),\qquad x'=\gamma(x-vt),\qquad y'=y,\qquad z'=z.$$
> Then $\eta$ takes the same form in primed coordinates:
> > $$-\,dt^2+dx^2+dy^2+dz^2
> =
> -\,dt'^2+dx'^2+dy'^2+dz'^2.$$

> [!success] Proofs
> Differentiate the boost formulas: $dt'=\gamma(dt-v\,dx)$ and $dx'=\gamma(dx-v\,dt)$. Then
> $$-dt'^2+dx'^2=-\gamma^2(dt-v\,dx)^2+\gamma^2(dx-v\,dt)^2=\gamma^2(1-v^2)(-\,dt^2+dx^2)=-\,dt^2+dx^2.$$
> Add $dy^2+dz^2$ to conclude.

> [!danger] Null Lines and “$c=1$”
> In $(t,x)$-coordinates, null directions satisfy $-dt^2+dx^2=0$, i.e. $|dx/dt|=1$. Thus light rays have coordinate speed $1$ in any inertial coordinate system. This is the geometric translation of the physical postulate that light speed is invariant.

## Timelike geodesics maximize proper time: the twin paradox without drama

One of the most useful (and physically meaningful) variational facts in Minkowski spacetime is:

> [!note] Maximal Proper Time in Minkowski Spacetime
> Let $p,q\in\mathbb{M}^{1,3}$ with $q\in I^+(p)$ (timelike separation). Among all piecewise $C^1$ future-directed timelike curves $\gamma$ from $p$ to $q$, the unique maximizer of proper time is the straight timelike segment from $p$ to $q$ (i.e. the inertial worldline).

The proof is a good example of “physics statement $\Rightarrow$ clean geometry.”

> [!note] Hyperbolic Cauchy–Schwarz
> Let $a,b\in V$ be future-directed timelike vectors. Then
> > $$-\eta(a,b) \;\ge\; \sqrt{-\eta(a,a)}\,\sqrt{-\eta(b,b)},$$
> with equality iff $a$ and $b$ are positive multiples of each other.

> [!success] Proofs
> Let $\alpha=\sqrt{-\eta(a,a)}$ and $\beta=\sqrt{-\eta(b,b)}$. Define unit timelike vectors $\hat a=a/\alpha$ and $\hat b=b/\beta$ so that $\eta(\hat a,\hat a)=\eta(\hat b,\hat b)=-1$. Choose an inertial frame in which $\hat a=(1,0,0,0)$. Write $\hat b=(\hat b^0,\hat{\vec b})$. Since $\hat b$ is future-directed timelike,
> $$-1=\eta(\hat b,\hat b)=-(\hat b^0)^2+\|\hat{\vec b}\|^2 \quad\Rightarrow\quad (\hat b^0)^2=1+\|\hat{\vec b}\|^2\ge 1,$$
> hence $\hat b^0\ge 1$. Now compute
> $$-\eta(\hat a,\hat b) = -\eta\bigl((1,0,0,0),(\hat b^0,\hat{\vec b})\bigr)=\hat b^0\ge 1.$$
> Thus $-\eta(\hat a,\hat b)\ge 1$, which is the desired inequality after rescaling. Equality holds iff $\hat{\vec b}=0$, i.e. $\hat b=(1,0,0,0)$ in this frame, meaning $\hat b=\hat a$ and hence $b$ is a positive multiple of $a$.

> [!success] Proofs
> ****Proof of Maximal Proper Time in Minkowski Spacetime (piecewise linear case).****  
> First assume $\gamma$ is a future-directed timelike **broken line** from $p$ to $q$ with vertices $p=p_0,p_1,\dots,p_N=q$, and linear segments $\gamma_k$ joining $p_{k-1}$ to $p_k$. Let $v_k=p_k-p_{k-1}\in V$, so each $v_k$ is future-directed timelike. The proper time along $\gamma_k$ is exactly $\sqrt{-\eta(v_k,v_k)}$, hence
> $$\tau(\gamma)=\sum_{k=1}^N \sqrt{-\eta(v_k,v_k)}.$$
> Let $V=\sum_{k=1}^N v_k = q-p$. Apply the hyperbolic Cauchy–Schwarz inequality with $a=V$ and $b=v_k$:
> $$-\eta(V,v_k)\ge \sqrt{-\eta(V,V)}\,\sqrt{-\eta(v_k,v_k)}.$$
> Sum over $k$ and use linearity:
> $$-\eta(V,V)= -\eta\Bigl(V,\sum_{k=1}^N v_k\Bigr)=\sum_{k=1}^N \bigl(-\eta(V,v_k)\bigr)
> \ge \sqrt{-\eta(V,V)} \sum_{k=1}^N \sqrt{-\eta(v_k,v_k)}.$$
> Since $V$ is timelike (because $q\in I^+(p)$), $\sqrt{-\eta(V,V)}>0$, and we can divide to obtain
> $$\sum_{k=1}^N \sqrt{-\eta(v_k,v_k)} \le \sqrt{-\eta(V,V)}.$$
> The right-hand side is exactly the proper time of the straight segment from $p$ to $q$. Equality holds iff each $v_k$ is a positive multiple of $V$, i.e. iff the broken line is actually a straight line.

> [!danger] From Broken Lines to General Curves
> A general piecewise $C^1$ timelike curve can be approximated by future-directed timelike broken lines. Using a standard limiting argument (based on uniform convergence and the continuity of the integrand $\sqrt{-\eta(\dot\gamma,\dot\gamma)}$ under suitable parametrizations), one extends the maximality from broken lines to all piecewise $C^1$ timelike curves.
>
> The conceptual point is that in Lorentzian geometry the variational behavior is “reversed”: timelike geodesics maximize (rather than minimize) proper time.

> [!example] Twin Paradox as a Corollary
> Two observers coincide at event $p$, separate, and reunite at event $q\in I^+(p)$. The inertial observer travels along the straight segment; the other follows a non-geodesic worldline (e.g. accelerating to turn around). By maximality of the inertial worldline, the inertial worldline has strictly larger proper time, so the accelerating twin has experienced less proper time (“is younger”) at reunion. The “paradox” dissolves once one remembers that proper time depends on the entire worldline, not just endpoints, and that only inertial worldlines are timelike geodesics in Minkowski spacetime.

## Causal diamonds and a first glimpse of global Lorentzian geometry

Even in flat spacetime it is useful to isolate the regions determined purely by causality.

> [!info] Causal Diamonds / Alexandrov Sets
> Given events $p,q$ with $p\ll q$, the **(open) causal diamond** is
> > $$A(p,q)\coloneqq I^+(p)\cap I^-(q).$$
> The closed diamond is $\overline{A(p,q)}=J^+(p)\cap J^-(q)$.

> [!danger] Why Diamonds Matter
> Diamonds are the basic building blocks of causality theory: in globally hyperbolic spacetimes they are (relatively) compact and control predictability. In Minkowski space, diamonds are explicitly describable and serve as a testbed for later definitions (global hyperbolicity, Cauchy surfaces, etc.).

> [!abstract] A Cauchy Surface in Minkowski Spacetime
> In Minkowski spacetime with inertial time coordinate $t$, each hypersurface $\Sigma_{t_0}=\{t=t_0\}$ is a Cauchy surface: every inextendible future-directed timelike curve intersects $\Sigma_{t_0}$ exactly once.

> [!success] Proofs
> Let $\gamma:I\to\mathbb{M}^{1,3}$ be an inextendible future-directed timelike curve. In inertial coordinates, timelikeness implies $dt/d\lambda>0$ for any parameter $\lambda$ compatible with time orientation, so $t\circ\gamma$ is strictly increasing. Inextendibility forces $t\circ\gamma$ to have range $(-\infty,\infty)$ (otherwise $\gamma$ would remain in a slab and could be extended), so there is a unique parameter value with $t(\gamma)=t_0$.