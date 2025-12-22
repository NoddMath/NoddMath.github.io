+++
date = "2025-02-06T15:44:10-04:00"
draft = false
title = "Minkowski Space and the First Geometry of Relativity"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity" ]
+++

This lecture sets up the **flat model** for general relativity: Minkowski space.
We treat it primarily as a semi-Riemannian manifold (so the definitions will later
generalize verbatim), but we also introduce the basic physical interpretations
(observers, proper time, boosts) in a way that does not assume prior exposure to
special relativity or analytical mechanics.

## Conventions and Notation

Throughout the notes we use the sign convention
$$(-,+,+,+).$$
We set $c=1$.
Spacetime indices are $\mu,\nu,\ldots\in\{0,1,2,3\}$ and spatial indices are
$i,j,\ldots\in\{1,2,3\}$. We employ Einstein summation.

Given a bilinear form $b$ and vectors $v,w$, we write $b(v,w)$ and in coordinates
$b_{\mu\nu}v^\mu w^\nu$. In Minkowski space we write $\eta$ for the metric tensor.

## Minkowski Space as a Lorentzian Vector Space

> [!info] Minkowski Space
> The **Minkowski space** is the real vector space $\mathbb{R}^{4}$ equipped with the bilinear form  
> $$\eta(v,w):=-v^{0}w^{0}+v^{1}w^{1}+v^{2}w^{2}+v^{3}w^{3},$$  
> i.e. the matrix of $\eta$ in the standard basis is  
> $$(\eta_{\mu\nu})=\mathrm{diag}(-1,1,1,1).$$  
> We denote this Lorentzian inner product space by $(\mathbb{R}^{1,3},\eta)$.

> [!danger] Remark
> For later use: Minkowski spacetime is the affine space underlying $\mathbb{R}^{4}$
> equipped with the translation-invariant Lorentzian metric $\eta$.
> Thus vectors live in a fixed vector space $\mathbb{R}^{1,3}$, while tangent vectors at a point
> $p$ of spacetime are canonically identified with $\mathbb{R}^{1,3}$ by translation.

> [!info] Causal Character
> A nonzero vector $v\in\mathbb{R}^{1,3}$ is called  
> - **timelike** if $\eta(v,v)<0$,  
> - **null** (or **lightlike**) if $\eta(v,v)=0$,  
> - **spacelike** if $\eta(v,v)>0$.  
> We also declare $0$ to be spacelike by convention.

> [!info] Time Orientation
> A vector $v$ is **future-directed** if it is timelike or null and $v^{0}>0$,
> and **past-directed** if it is timelike or null and $v^{0}<0$.
> The choice of which component counts as "time" and which sign is "future"
> is part of a **time orientation**.

> [!danger] Remark
> The set $\{v:\eta(v,v)<0\}$ of timelike vectors has two connected components,
> distinguished by the sign of $v^{0}$; choosing one as ``future'' is the time orientation.
> This dichotomy survives on any time-orientable Lorentzian manifold.

## Basic Inequalities and Orthogonal Complements

Lorentzian geometry has analogues of the familiar Euclidean statements, but with important sign changes.

> [!abstract] Lorentzian Cauchy–Schwarz for Timelike Vectors
> Let $u,v$ be future-directed timelike vectors in $(\mathbb{R}^{1,3},\eta)$. Then  
> $$-\eta(u,v)\ge \sqrt{-\eta(u,u)}\,\sqrt{-\eta(v,v)},$$  
> with equality if and only if $u$ and $v$ are positive scalar multiples of each other.
> Equivalently, if $u$ and $v$ are future-directed **unit timelike** vectors
> (i.e. $\eta(u,u)=\eta(v,v)=-1$), then $-\eta(u,v)\ge 1$.

> [!success] Proof
> Fix a future-directed timelike $u$. Since $\eta$ has signature $(-,+,+,+)$,
> there exists an $\eta$-orthonormal basis $\{e_0,e_1,e_2,e_3\}$ with $e_0$ future-directed
> timelike and $u=\alpha e_0$ where $\alpha=\sqrt{-\eta(u,u)}>0$.
> Write $v=v^0 e_0+\sum_{i=1}^3 v^i e_i$. Then  
> $$\eta(v,v)=-(v^0)^2+\sum_{i=1}^3 (v^i)^2<0\quad\Rightarrow\quad |v^0|>\sqrt{\sum_{i=1}^3 (v^i)^2}.$$  
> Future-directed implies $v^0>0$. Moreover,  
> $$\eta(u,v)=\eta(\alpha e_0, v)=\alpha\,\eta(e_0,v)=\alpha(-v^0)=-\alpha v^0.$$  
> Hence $-\eta(u,v)=\alpha v^0$.
>
> Now compute $-\eta(v,v)=(v^0)^2-\sum_{i=1}^3(v^i)^2$, so  
> $$v^0=\sqrt{\,\sum_{i=1}^3(v^i)^2-\eta(v,v)\,}\ \ge\ \sqrt{-\eta(v,v)}.$$  
> Multiplying by $\alpha=\sqrt{-\eta(u,u)}$ yields the inequality.
> Equality forces $v^i=0$ for all $i$, hence $v$ is proportional to $e_0$, i.e. proportional to $u$,
> and future-directed forces the proportionality constant to be positive.

> [!abstract] Orthogonal Complements
> Let $v\in\mathbb{R}^{1,3}$ be nonzero.  
> 1. If $v$ is timelike, then $v^\perp:=\{w:\eta(v,w)=0\}$ is a $3$-dimensional Euclidean subspace (i.e. $\eta|_{v^\perp}$ is positive definite).  
> 2. If $v$ is spacelike, then $v^\perp$ is a $3$-dimensional Lorentzian subspace (signature $(-,+,+)$).  
> 3. If $v$ is null, then $v^\perp$ is degenerate and contains $v$ itself.

> [!success] Proof
> Choose an $\eta$-orthonormal basis adapted to $v$:
> if $v$ is timelike, take $v=\alpha e_0$; if spacelike, take $v=\beta e_1$; if null, take a null frame.
> Then the orthogonality condition $\eta(v,w)=0$ removes the corresponding component and the remaining restriction of $\eta$ has the stated signature; in the null case, degeneracy is immediate from $\eta(v,v)=0$ and $\eta(v,w)=0$ for $w=v$.

## Intervals and the Causal Relation in Minkowski Spacetime

Let spacetime be the affine space $\mathbb{R}^{4}$ with the translation-invariant metric $\eta$.
For events $p,q\in\mathbb{R}^{4}$, define the **displacement vector** $\Delta:=q-p\in\mathbb{R}^{1,3}$.
Then $\eta(\Delta,\Delta)$ is the (signed) squared interval between $p$ and $q$.

> [!info] Causal Separation
> Two events $p,q\in\mathbb{R}^{4}$ are called  
> 1. **timelike separated** if $\eta(q-p,q-p)<0$,  
> 2. **null separated** if $\eta(q-p,q-p)=0$ and $p\neq q$,  
> 3. **spacelike separated** if $\eta(q-p,q-p)>0$.

> [!info] Chronological and Causal Futures
> For $p\in\mathbb{R}^{4}$, define  
> $$I^+(p):=\{q:\ q-p\ \text{is future-directed timelike}\},\quad J^+(p):=\{q:\ q-p\ \text{is future-directed causal (timelike or null)}\},$$  
> and similarly $I^-(p),J^-(p)$ with ``future'' replaced by ``past''.

> [!danger] Remark
> This is the prototype for causality theory on curved spacetimes:
> in a Lorentzian manifold $(\mathcal{M},g)$, one defines $I^\pm(p),J^\pm(p)$ using timelike/null curves.
> In Minkowski, translation makes the relation linear in $q-p$ and hence especially transparent.

## Proper Time and Inertial Worldlines

A future-directed timelike curve $\gamma$ represents the worldline of a massive observer.

> [!info] Proper Time in Minkowski Spacetime
> Let $\gamma:[a,b]\to\mathbb{R}^{4}$ be a piecewise $C^{1}$ future-directed timelike curve.
> Its **proper time length** is  
> $$\tau(\gamma):=\int_a^b \sqrt{-\eta(\dot\gamma(\lambda),\dot\gamma(\lambda))}\,d\lambda.$$  
> If $\lambda=\tau$ is chosen so that $\sqrt{-\eta(\dot\gamma,\dot\gamma)}\equiv 1$, then $\tau$ is called
> the **proper time parameter**.

> [!info] Four-Velocity and Four-Acceleration
> For a timelike curve parameterized by proper time, the **four-velocity** is  
> $$U:=\frac{d\gamma}{d\tau},\qquad\text{so that }\ \eta(U,U)=-1,$$  
> and the **four-acceleration** is $A:=dU/d\tau$.

> [!abstract] Four-Acceleration Is Orthogonal to Four-Velocity
> For a proper-time-parameterized timelike curve, one has $\eta(A,U)=0$.

> [!success] Proof
> Differentiate the identity $\eta(U,U)=-1$ with respect to $\tau$:  
> $$0=\frac{d}{d\tau}\eta(U,U)=2\eta\left(\frac{dU}{d\tau},U\right)=2\eta(A,U).$$

> [!abstract] Straight Timelike Segments Maximize Proper Time
> Let $p,q\in\mathbb{R}^{4}$ with $q\in I^+(p)$ (timelike separated with $q$ to the future of $p$).
> Among all piecewise $C^{1}$ future-directed timelike curves $\gamma$ with $\gamma(a)=p$, $\gamma(b)=q$,
> the proper time $\tau(\gamma)$ is maximized by the straight segment  
> $$\gamma_0(\lambda)=p+\lambda(q-p),\qquad \lambda\in[0,1],$$  
> and in that case  
> $$\tau(\gamma_0)=\sqrt{-\eta(q-p,q-p)}.$$

> [!success] Proof
> Parameterize any such curve by coordinate time $t=x^{0}$ (which is strictly increasing for
> future-directed timelike curves). Write $\gamma(t)=(t,\mathbf{x}(t))$ with $\mathbf{x}\in\mathbb{R}^{3}$.
> Then $\dot\gamma=(1,\dot{\mathbf{x}})$ and  
> $$-\eta(\dot\gamma,\dot\gamma)=1-|\dot{\mathbf{x}}|^{2},$$  
> so  
> $$\tau(\gamma)=\int_{t_p}^{t_q}\sqrt{1-|\dot{\mathbf{x}}(t)|^{2}}\,dt.$$  
> Use the elementary inequality $\sqrt{1-s^{2}}\le 1-\frac12 s^{2}$ for $|s|<1$ to get  
> $$\tau(\gamma)\le \int_{t_p}^{t_q}\left(1-\frac12|\dot{\mathbf{x}}(t)|^{2}\right)\,dt.$$  
> Hence  
> $$\tau(\gamma)\le (t_q-t_p)-\frac12\int_{t_p}^{t_q}|\dot{\mathbf{x}}(t)|^{2}\,dt.$$  
> Now apply Cauchy–Schwarz in $\mathbb{R}^{3}$:  
> $$\left|\mathbf{x}(t_q)-\mathbf{x}(t_p)\right|^{2}=\left|\int_{t_p}^{t_q}\dot{\mathbf{x}}(t)\,dt\right|^{2}\le (t_q-t_p)\int_{t_p}^{t_q}|\dot{\mathbf{x}}(t)|^{2}\,dt,$$  
> hence  
> $$\int_{t_p}^{t_q}|\dot{\mathbf{x}}(t)|^{2}\,dt \ge \frac{\left|\Delta\mathbf{x}\right|^{2}}{\Delta t},\qquad \Delta t=t_q-t_p,\ \ \Delta\mathbf{x}=\mathbf{x}(t_q)-\mathbf{x}(t_p).$$  
> Combining gives  
> $$\tau(\gamma)\le \Delta t-\frac12\cdot \frac{|\Delta\mathbf{x}|^{2}}{\Delta t}.$$  
> A sharper argument (e.g. Jensen's inequality applied to $\tau(\gamma)$ above, since $\sqrt{1-s^2}$
> is concave on $[0,1)$) improves this to the optimal bound  
> $$\tau(\gamma)\le \Delta t\sqrt{1-\left|\frac{\Delta\mathbf{x}}{\Delta t}\right|^{2}}=\sqrt{(\Delta t)^{2}-|\Delta\mathbf{x}|^{2}}=\sqrt{-\eta(q-p,q-p)}.$$  
> Equality holds exactly when $\dot{\mathbf{x}}(t)$ is constant, i.e. $\mathbf{x}(t)$ is affine in $t$,
> which is the straight segment $\gamma_0$.

> [!danger] Remark
> In Euclidean geometry straight lines **minimize** length locally; in Lorentzian geometry, timelike
> geodesics **maximize** proper time locally. This sign reversal is at the heart of many later phenomena,
> including focusing and singularity theorems.

## Lorentz Transformations and Boosts

> [!info] Lorentz Group
> The **Lorentz group** is  
> $$O(1,3):=\{\Lambda\in GL(4,\mathbb{R}):\ \Lambda^{T}\eta\,\Lambda=\eta\}.$$  
> The subgroup preserving time orientation and spatial orientation is denoted $SO^{+}(1,3)$.

> [!abstract] Interval Invariance
> If $\Lambda\in O(1,3)$, then $\eta(\Lambda v,\Lambda w)=\eta(v,w)$ for all $v,w\in\mathbb{R}^{1,3}$.
> In particular, $\eta(\Lambda v,\Lambda v)=\eta(v,v)$, so causal character is preserved.

> [!success] Proof
> This is the matrix identity $\Lambda^{T}\eta\Lambda=\eta$ rewritten:  
> $$\eta(\Lambda v,\Lambda w)=v^{T}\Lambda^{T}\eta\Lambda w=v^{T}\eta w=\eta(v,w).$$

A particularly important one-parameter family is the ****boost**** in the $x^{1}$-direction.

> [!abstract] Standard Boost and Rapidity
> For $\beta\in(-1,1)$, set $\gamma:=(1-\beta^{2})^{-1/2}$ and define  
> $$\Lambda(\beta):=\begin{pmatrix}\gamma & -\gamma\beta & 0 & 0\\ -\gamma\beta & \gamma & 0 & 0\\ 0&0&1&0\\ 0&0&0&1\end{pmatrix}.$$  
> Then $\Lambda(\beta)\in SO^{+}(1,3)$ and preserves $\eta$.
> Moreover, introducing the **rapidity** $\varphi\in\mathbb{R}$ by $\beta=\tanh\varphi$ yields  
> $$\gamma=\cosh\varphi,\qquad \gamma\beta=\sinh\varphi,$$  
> so that  
> $$\Lambda(\varphi)=\begin{pmatrix}\cosh\varphi & -\sinh\varphi & 0 & 0\\ -\sinh\varphi & \cosh\varphi & 0 & 0\\ 0&0&1&0\\ 0&0&0&1\end{pmatrix}.$$

> [!success] Proof
> A direct multiplication verifies $\Lambda(\beta)^{T}\eta\Lambda(\beta)=\eta$; equivalently one checks
> the $2\times 2$ block  
> $$\begin{pmatrix}\gamma&-\gamma\beta\\ -\gamma\beta&\gamma\end{pmatrix}$$  
> preserves the quadratic form $-(dx^{0})^{2}+(dx^{1})^{2}$, which amounts to $\gamma^{2}(1-\beta^{2})=1$.
> For the rapidity identities, recall $\cosh^{2}\varphi-\sinh^{2}\varphi=1$ and
> $\tanh\varphi=\sinh\varphi/\cosh\varphi$, so $1-\tanh^{2}\varphi=\mathrm{sech}^{2}\varphi$ and hence
> $\gamma=(1-\beta^{2})^{-1/2}=\cosh\varphi$ with $\gamma\beta=\sinh\varphi$.

> [!abstract] Composition Law and Velocity Addition
> Boosts add in rapidity:  
> $$\Lambda(\varphi_{1})\Lambda(\varphi_{2})=\Lambda(\varphi_{1}+\varphi_{2}).$$  
> Equivalently, in terms of $\beta=\tanh\varphi$,  
> $$\beta_{12}=\frac{\beta_{1}+\beta_{2}}{1+\beta_{1}\beta_{2}}.$$

> [!success] Proof
> Multiply the $2\times 2$ hyperbolic-rotation blocks in $\Lambda(\varphi)$ and use $\cosh(\varphi_{1}+\varphi_{2})=\cosh\varphi_{1}\cosh\varphi_{2}+\sinh\varphi_{1}\sinh\varphi_{2}$ and the analogous identity for $\sinh$.
> Then $\tanh(\varphi_{1}+\varphi_{2})$ gives the velocity-addition formula.

## Observers and the “Rest Frame”

> [!info] Inertial Observer and Rest Frame
> An **inertial observer** in Minkowski spacetime is a timelike straight worldline
> $\gamma(\tau)=p+\tau U$ with constant future-directed unit timelike vector $U$.
> A coordinate system in which $U=(1,0,0,0)$ is called the observer's **rest frame**.

> [!abstract] Any Future Timelike Vector Can Be Boosted to Rest
> Let $U$ be future-directed timelike. Then there exists $\Lambda\in SO^{+}(1,3)$ such that
> $\Lambda U=(\sqrt{-\eta(U,U)},0,0,0)$.
> In particular, if $U$ is unit timelike, then $\Lambda U=(1,0,0,0)$.

> [!success] Proof
> Write $U=(U^{0},\mathbf{U})$ with $\mathbf{U}\in\mathbb{R}^{3}$ and $U^{0}>0$.
> Timelike means $(U^{0})^{2}>|\mathbf{U}|^{2}$.
> If $\mathbf{U}=0$ there is nothing to prove. Otherwise, rotate spatial coordinates so that
> $\mathbf{U}$ points along the $x^{1}$-axis, i.e. $\mathbf{U}=(U^{1},0,0)$ with $U^{1}\neq 0$.
> Apply the boost with $\beta=U^{1}/U^{0}$ (note $|\beta|<1$).
> A direct computation gives  
> $$(\Lambda(\beta)U)^{1}=\gamma(U^{1}-\beta U^{0})=0,$$  
> and  
> $$(\Lambda(\beta)U)^{0}=\gamma(U^{0}-\beta U^{1})=\sqrt{(U^{0})^{2}-(U^{1})^{2}}=\sqrt{-\eta(U,U)}. $$

## Outlook: From Flat to Curved

Minkowski spacetime is the **local model** for general relativity: a curved spacetime
$(\mathcal{M},g)$ is a smooth manifold with a Lorentzian metric $g$ such that, at each point $p\in\mathcal{M}$,
the tangent space $(T_{p}\mathcal{M},g_{p})$ is isometric to $(\mathbb{R}^{1,3},\eta)$.
Many notions above (timelike/null/spacelike, time orientation, proper time, Lorentz frames)
are therefore **pointwise** definitions on any Lorentzian manifold.

Starting next lecture we will use this flat model to motivate the geometric structures
needed to talk about curvature and gravitation: connections, geodesics, and ultimately the
Einstein equation.
