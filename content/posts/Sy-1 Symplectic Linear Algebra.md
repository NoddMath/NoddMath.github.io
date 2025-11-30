+++
date = "2024-12-28T15:44:10-04:00"
draft = false
title = "Symplectic Linear Algebra"
categories = "Math"
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

Throughout this chapter, $V$ denotes a finite-dimensional real vector space.

## 1.1 Skew-symmetric bilinear forms and rank

> [!info] Definition (bilinear and skew-symmetric forms)
> A **bilinear form** on a real vector space $V$ is a map
> $$\Omega : V \times V \to \mathbb{R}$$
> such that $\Omega$ is linear in each variable.  
> It is called **skew-symmetric** if
> $$\Omega(v,w) = - \Omega(w,v) \quad \text{for all } v,w \in V.$$
> For a skew-symmetric form one always has $\Omega(v,v)=0$ for all $v\in V$.

> [!info] Definition (kernel and rank)
> Let $\Omega$ be a skew-symmetric bilinear form on $V$.  
> The **kernel** (also called the **radical**) of $\Omega$ is
> $$\ker \Omega := \{ v \in V \mid \Omega(v,w)=0 \ \text{for all } w\in V \}.$$
> The **rank** of $\Omega$ is defined by
> $$\mathrm{rank}(\Omega) := \dim V - \dim \ker \Omega.$$

The following structure theorem is a linear-algebraic normal form for skew-symmetric forms.

> [!note] Theorem 1.1 (Normal form for skew-symmetric forms)
> Let $\Omega$ be a skew-symmetric bilinear form on a finite-dimensional real vector space $V$. Then there exist:
> - a subspace $U \subset V$, and
> - two-dimensional subspaces $W_1,\dots,W_n \subset V$,
> such that
> $$V = U \oplus W_1 \oplus \cdots \oplus W_n,$$
> and:
> 1. $U = \ker \Omega$;
> 2. for each $j$ there exists a basis $\{e_j,f_j\}$ of $W_j$ such that
>    $$\Omega(e_j,f_j)=1, \quad \Omega(e_j,e_j)=\Omega(f_j,f_j)=0;$$
> 3. the subspaces $U,W_1,\dots,W_n$ are mutually orthogonal with respect to $\Omega$, i.e.
>    $$\Omega(u,w)=0 \quad \text{for all } u \in U,\ w\in W_j,$$
>    and
>    $$\Omega(w_j,w_k)=0 \quad \text{for all } w_j\in W_j,\ w_k\in W_k,\ j\neq k.$$
> In particular,
> $$\dim V = \dim \ker\Omega + 2n \quad\text{and}\quad \mathrm{rank}(\Omega) = 2n.$$

> [!success] Proof (induction on $\dim V - \dim \ker\Omega$)
> If $\Omega \equiv 0$, then $\ker \Omega = V$ and the statement is trivial with $n=0$.
> Assume $\Omega$ is not identically zero. Then there exist $v_1,w_1 \in V$ such that $\Omega(v_1,w_1)\neq 0$. After rescaling $w_1$, we may assume
> $$\Omega(v_1,w_1)=1.$$
> Set $e_1 := v_1$, $f_1 := w_1$, and let
> $$W_1 := \mathrm{span}\{e_1,f_1\}.$$
> 
> Define the $\Omega$-orthogonal complement of $W_1$ by
> $$W_1^\Omega := \{ v \in V \mid \Omega(v,x)=0 \ \text{for all } x\in W_1 \}.$$
> Then by construction $\Omega|_{W_1}$ is nondegenerate and $W_1 \cap W_1^\Omega = \{0\}$.  
> 
> **Claim.** We have a direct sum decomposition
> $$V = W_1 \oplus W_1^\Omega.$$
> Indeed, for any $v\in V$ we can decompose it as
> $$v' := v - \Omega(v,f_1)e_1 + \Omega(v,e_1)f_1.$$
> A direct computation shows $\Omega(v',e_1)=\Omega(v',f_1)=0$, hence $v'\in W_1^\Omega$. Thus
> $$v = (\Omega(v,f_1)e_1 - \Omega(v,e_1)f_1) + v',$$
> with the first term in $W_1$ and the second in $W_1^\Omega$. The intersection is zero by construction, so this gives the claimed direct sum.
> 
> The restriction $\Omega|_{W_1^\Omega}$ is again skew-symmetric. Moreover,
> $$\ker\bigl(\Omega|_{W_1^\Omega}\bigr) = \ker \Omega \cap W_1^\Omega,$$
> and
> $$\dim W_1^\Omega - \dim \ker(\Omega|_{W_1^\Omega}) = \dim V - \dim \ker\Omega - 2.$$
> Thus the quantity $\dim(\cdot) - \dim\ker(\cdot)$ drops by $2$.  
> 
> We can now apply the induction hypothesis to the pair $(W_1^\Omega,\Omega|_{W_1^\Omega})$: there exist subspaces
> $$U' \subset W_1^\Omega, \quad W_2,\dots,W_n \subset W_1^\Omega$$
> with all the desired properties *inside* $W_1^\Omega$. Setting $U := U'$ and keeping $W_1$ as above, we obtain the decomposition
> $$V = U \oplus W_1 \oplus \cdots \oplus W_n$$
> with the required orthogonality and pairwise properties. By construction $U=\ker\Omega$, and each $W_j$ is two-dimensional with basis $\{e_j,f_j\}$ satisfying $\Omega(e_j,f_j)=1$. This proves the theorem. $\square$

> [!abstract] Corollary 1.2 (Even rank and nondegeneracy)
> Let $\Omega$ be a skew-symmetric bilinear form on $V$. Then:
> 4. $\mathrm{rank}(\Omega)$ is even, say $\mathrm{rank}(\Omega)=2n$;
> 5. $\Omega$ is nondegenerate if and only if $\ker\Omega = \{0\}$, if and only if $\mathrm{rank}(\Omega)=\dim V$.

> [!success] Proof
> By Theorem 1.1 we have $\mathrm{rank}(\Omega)=2n$, which is even. The other statements are immediate from the definition of rank.

> [!danger] Remark 1.3
> A nondegenerate skew-symmetric form $\Omega$ can only exist on an even-dimensional vector space. This is the purely linear reason why symplectic geometry lives in even dimensions.

## 1.2 Symplectic vector spaces and Darboux bases

> [!info] Definition (symplectic form and symplectic vector space)
> A **symplectic form** on a real vector space $V$ is a bilinear form
> $$\omega : V \times V \to \mathbb{R}$$
> that is:
> 1. skew-symmetric, i.e. $\omega(v,w) = -\omega(w,v)$ for all $v,w\in V$;
> 2. nondegenerate, i.e.
>    $$\bigl(\forall w\in V,\ \omega(v,w)=0\bigr) \ \Longrightarrow\ v=0.$$
> A pair $(V,\omega)$ consisting of a vector space and a symplectic form is called a **symplectic vector space**.

By Corollary 1.2, any symplectic vector space has even dimension.

> [!abstract] Proposition 1.4 (Even dimension)
> If $(V,\omega)$ is a symplectic vector space, then $\dim V = 2n$ for some $n\in\mathbb{N}$.

> [!success] Proof
> A symplectic form is a nondegenerate skew-symmetric form. By Corollary 1.2, $\ker\omega=\{0\}$ and $\mathrm{rank}(\omega)=\dim V$. Theorem 1.1 shows that the rank must be even, say $\mathrm{rank}(\omega)=2n$. Hence $\dim V = 2n$. $\square$

> [!info] Definition (Darboux basis / symplectic basis)
> Let $(V,\omega)$ be a symplectic vector space of dimension $2n$. A basis
> $$\{e_1,\dots,e_n,f_1,\dots,f_n\}$$
> of $V$ is called a **Darboux basis** (or **symplectic basis**) for $\omega$ if
> $$\omega(e_i,e_j)=0,\quad \omega(f_i,f_j)=0,\quad \omega(e_i,f_j) = \delta_{ij}, \quad 1\le i,j\le n.$$

> [!note] Theorem 1.5 (Existence of Darboux bases)
> Let $(V,\omega)$ be a symplectic vector space of dimension $2n$. Then $V$ admits a Darboux basis.

> [!success] Proof
> Since $\omega$ is nondegenerate, Theorem 1.1 tells us that we can decompose $V$ as
> $$V = W_1 \oplus \cdots \oplus W_n$$
> where each $W_j$ is a two-dimensional subspace on which $\omega$ is nondegenerate and all these subspaces are mutually $\omega$-orthogonal. For each $j$, choose a basis $\{e_j,f_j\}$ for $W_j$ such that $\omega(e_j,f_j)=1$.  
> 
> Because the subspaces $W_j$ are pairwise orthogonal with respect to $\omega$, we automatically have
> $$\omega(e_i,e_j)=\omega(f_i,f_j)=\omega(e_i,f_j)=0 \quad \text{for } i\neq j.$$
> After possibly replacing $f_j$ by $-f_j$ we may assume $\omega(e_j,f_j)=1$ for each $j$. Then
> $$\{e_1,\dots,e_n,f_1,\dots,f_n\}$$
> is a Darboux basis by definition. $\square$

In a Darboux basis, the matrix of $\omega$ takes a universal form.

> [!abstract] Proposition 1.6 (Matrix form in a Darboux basis)
> Let $(V,\omega)$ be a $2n$-dimensional symplectic vector space with Darboux basis $\{e_1,\dots,e_n,f_1,\dots,f_n\}$.  
> Let $\Omega$ be the matrix of $\omega$ in this basis. Then
> $$\Omega = \begin{pmatrix} 0 & I_n \\ -I_n & 0 \end{pmatrix} =: J_0.$$

> [!success] Proof
> By definition of a Darboux basis, the only nonzero pairings are $\omega(e_i,f_i)=1$. In block form, with respect to the ordered basis $(e_1,\dots,e_n,f_1,\dots,f_n)$, this is exactly the matrix $J_0$ above. $\square$

> [!note] Theorem 1.7 (Classification of symplectic vector spaces)
> Any symplectic vector space $(V,\omega)$ of dimension $2n$ is linearly symplectomorphic to the standard model $(\mathbb{R}^{2n},\omega_0)$, where
> $$\omega_0 = \sum_{i=1}^n \mathrm{d}x_i \wedge \mathrm{d}y_i.$$

> [!success] Proof
> Choose a Darboux basis $\{e_1,\dots,e_n,f_1,\dots,f_n\}$ of $V$. Identify $\mathbb{R}^{2n}$ with coordinates $(x_1,\dots,x_n,y_1,\dots,y_n)$ and standard basis vectors $\{\varepsilon_1,\dots,\varepsilon_n,\varphi_1,\dots,\varphi_n\}$.  
> Define $T:\mathbb{R}^{2n}\to V$ by
> $$T(\varepsilon_i) = e_i,\quad T(\varphi_i)   = f_i.$$
> Then $T$ is a linear isomorphism. The pullback $T^*\omega$ is a symplectic form on $\mathbb{R}^{2n}$ whose matrix in the standard basis is again $J_0$, hence it equals $\omega_0$. Thus $T$ is a linear symplectomorphism
> $$T : (\mathbb{R}^{2n},\omega_0) \to (V,\omega).$$
> $\square$

> [!example] Example 1.8 (The standard symplectic space)
> Consider $\mathbb{R}^{2n}$ with coordinates $(x_1,\dots,x_n,y_1,\dots,y_n)$. Define
> $$\omega_0\bigl((x,y),(x',y')\bigr) = \sum_{i=1}^n x_i y'_i - y_i x'_i.$$
> In terms of the basis
> $$e_i = \frac{\partial}{\partial x_i},\quad f_i = \frac{\partial}{\partial y_i},$$
> we have
> $$\omega_0(e_i,e_j)=0,\quad \omega_0(f_i,f_j)=0,\quad \omega_0(e_i,f_j) = \delta_{ij}.$$
> Hence $\{e_1,\dots,e_n,f_1,\dots,f_n\}$ is a Darboux basis and $(\mathbb{R}^{2n},\omega_0)$ is a symplectic vector space.

> [!example] Example 1.9 ($\mathbb{C}^n$ as a symplectic vector space)
> Consider $\mathbb{C}^n$ as a real vector space of dimension $2n$. Write $z_i = x_i + \mathrm{i} y_i$. Let
> $$\langle z,w\rangle_{\mathbb{C}} := \sum_{i=1}^n z_i \overline{w_i}$$
> be the standard Hermitian inner product, and define the real inner product
> $$g(v,w) := \mathrm{Re}\,\langle v,w\rangle_{\mathbb{C}}.$$
> Let $J$ be multiplication by $\mathrm{i}$, viewed as a real-linear operator. Then
> $$\omega(v,w) := g(Jv,w)$$
> defines a skew-symmetric, nondegenerate bilinear form on the underlying real vector space, hence $(\mathbb{C}^n,\omega)$ is symplectic.  
> In the coordinate basis corresponding to $(x_1,\dots,x_n,y_1,\dots,y_n)$, $\omega$ coincides with $\omega_0$.

---

## 1.3 Symplectic complements and symplectic subspaces

Let $(V,\omega)$ be a symplectic vector space.

> [!info] Definition (symplectic complement)
> Let $Y\subset V$ be a linear subspace. The **symplectic complement** of $Y$ is
> $$Y^{\omega} := \{ v\in V \mid \omega(v,y)=0 \ \text{for all } y\in Y \}.$$

> [!abstract] Proposition 1.10 (Basic properties of symplectic complements)
> Let $Y\subset V$ be a subspace. Then:
> 1. $Y^{\omega}$ is a subspace of $V$;
> 2. $\dim Y + \dim Y^{\omega} = \dim V$;
> 3. $(Y^{\omega})^{\omega} = Y$.

> [!success] Proof
> (1) Linearity of $\omega$ in each argument shows that $Y^\omega$ is closed under addition and scalar multiplication, hence a subspace.
> 
> (2) Consider the linear map
> $$\Phi : V \to Y^*,\quad \Phi(v)(y) := \omega(v,y).$$
> Its kernel is precisely $Y^{\omega}$ by definition. The form $\omega$ is nondegenerate on $V$, so the induced map
> $$\widetilde{\omega} : V \to V^*,\quad \widetilde{\omega}(v)(w) = \omega(v,w)$$
> is an isomorphism. The restriction map $r : V^* \to Y^*$ is surjective. Thus
> $$\Phi = r \circ \widetilde{\omega}$$
> is surjective, hence $\mathrm{im}\,\Phi = Y^*$ and
> $$\dim \mathrm{im}\,\Phi = \dim Y.$$
> By the rank–nullity theorem,
> $$\dim V = \dim \ker \Phi + \dim \mathrm{im}\,\Phi = \dim Y^{\omega} + \dim Y.$$
> 
> (3) Applying (2) with $Y$ replaced by $Y^{\omega}$ gives
> $$\dim Y^{\omega} + \dim (Y^{\omega})^{\omega} = \dim V.$$
> On the other hand, from the definition we always have $Y \subset (Y^{\omega})^{\omega}$. Combining this inclusion with the dimension formula in (2) for $Y$ shows that $Y$ and $(Y^{\omega})^{\omega}$ have the same dimension, hence they must be equal. $\square$

> [!info] Definition (symplectic subspace)
> A subspace $Y \subset V$ is called a **symplectic subspace** if the restriction $\omega|_Y$ is nondegenerate, i.e.
> $$\bigl(\forall y' \in Y,\ \omega(y,y')=0\bigr) \ \Longrightarrow\ y=0.$$

> [!abstract] Proposition 1.11 (Characterisations of symplectic subspaces)
> Let $Y\subset V$. The following are equivalent:
> 4. $Y$ is a symplectic subspace, i.e. $\omega|_Y$ is nondegenerate;
> 5. $Y \cap Y^{\omega} = \{0\}$;
> 6. $V = Y \oplus Y^{\omega}$.

> [!success] Proof
> (1) $\Rightarrow$ (2): If $y\in Y \cap Y^\omega$, then $\omega(y,y')=0$ for all $y'\in Y$. Nondegeneracy of $\omega|_Y$ implies $y=0$.  
> 
> (2) $\Rightarrow$ (3): By Proposition 1.10 (2),
> $$\dim Y + \dim Y^{\omega} = \dim V.$$
> Together with $Y\cap Y^\omega = \{0\}$, this implies that the sum $Y + Y^\omega$ has dimension $\dim V$. Since it is contained in $V$, we must have $V = Y \oplus Y^\omega$.
> 
> (3) $\Rightarrow$ (1): Let $y\in Y$ satisfy $\omega(y,y')=0$ for all $y'\in Y$. Then $y\in Y^\omega$ by definition. Thus
> $$y \in Y \cap Y^\omega.$$
> By (3) this intersection is $\{0\}$, so $y=0$. Hence $\omega|_Y$ is nondegenerate. $\square$

> [!example] Example 1.12 (A simple symplectic subspace)
> Let $(\mathbb{R}^{2n},\omega_0)$ be the standard symplectic space. Consider
> $$Y := \{(x_1,\dots,x_k,0,\dots,0,y_1,\dots,y_k,0,\dots,0)\} \cong \mathbb{R}^{2k}.$$
> Then $\omega_0|_Y$ is just the standard symplectic form in the first $k$ coordinate pairs. Hence $Y$ is a symplectic subspace and
> $$Y^{\omega} = \{(0,\dots,0,x_{k+1},\dots,x_n,0,\dots,0,y_{k+1},\dots,y_n)\} \cong \mathbb{R}^{2(n-k)}.$$
> One checks directly that $\mathbb{R}^{2n} = Y \oplus Y^\omega$ and that $\omega_0|_{Y^\omega}$ is symplectic as well.

## 1.4 Isotropic, coisotropic, and Lagrangian subspaces

> [!info] Definition (isotropic, coisotropic, Lagrangian)
> Let $Y\subset V$ be a subspace.
> - $Y$ is **isotropic** if $Y \subset Y^{\omega}$;
> - $Y$ is **coisotropic** if $Y^{\omega} \subset Y$;
> - $Y$ is **Lagrangian** if $Y$ is isotropic and $\dim Y = \frac{1}{2} \dim V$.

> [!abstract] Proposition 1.13 (Isotropic subspaces)
> Let $Y\subset V$. Then:
> 1. $Y$ is isotropic if and only if $\omega|_Y \equiv 0$;
> 2. if $Y$ is isotropic, then $\dim Y \le \frac{1}{2} \dim V$.

> [!success] Proof
> (1) If $Y\subset Y^\omega$, then for any $y,y'\in Y$, we have $y\in Y^\omega$ so $\omega(y,y')=0$. Conversely, if $\omega|_Y\equiv 0$, then for each $y\in Y$ and all $y'\in Y$, $\omega(y,y')=0$. Thus $y\in Y^\omega$ and hence $Y\subset Y^\omega$.
> 
> (2) If $Y\subset Y^\omega$, then
> $$\dim Y \le \dim Y^\omega = \dim V - \dim Y$$
> by Proposition 1.10 (2), so $\dim Y \le \frac{1}{2}\dim V$. $\square$

> [!abstract] Proposition 1.14 (Characterisation of Lagrangian subspaces)
> Let $V$ be $2n$-dimensional. For a subspace $L\subset V$, the following are equivalent:
> 1. $L$ is Lagrangian;
> 2. $L$ is isotropic and $\dim L = n$;
> 3. $L = L^{\omega}$;
> 4. $L$ is a maximal isotropic subspace (i.e. if $L\subset Y\subset V$ and $Y$ is isotropic, then $Y=L$).

> [!success] Proof
> (1) $\Leftrightarrow$ (2) is by definition.  
> 
> (2) $\Rightarrow$ (3): If $L\subset L^\omega$ and $\dim L = n$, then Proposition 1.10 (2) gives
> $$\dim L^\omega = \dim V - \dim L = 2n - n = n.$$
> Thus $L\subset L^\omega$ and $\dim L = \dim L^\omega$ imply $L = L^\omega$.
> 
> (3) $\Rightarrow$ (2): If $L=L^\omega$, Proposition 1.10 (2) yields
> $$2\dim L = \dim V = 2n,$$
> so $\dim L = n$. The inclusion $L\subset L^\omega$ then gives isotropicity.
> 
> (3) $\Rightarrow$ (4): Suppose $L=L^\omega$ and $L\subset Y\subset V$ with $Y$ isotropic. Then $Y\subset Y^\omega$. Using the inclusion $L\subset Y\subset Y^\omega\subset L^\omega=L$, we get $L\subset Y\subset L$, hence $Y=L$.
> 
> (4) $\Rightarrow$ (3): Assume $L$ is maximal isotropic. Then $L\subset L^\omega$ and $L^\omega$ is isotropic (because $(L^\omega)^\omega = L$ by Proposition 1.10 (3)). Maximality implies $L^\omega = L$. $\square$

> [!abstract] Proposition 1.15 (Every isotropic subspace sits inside a Lagrangian)
> Let $Y\subset V$ be an isotropic subspace. Then there exists a Lagrangian subspace $L\subset V$ such that $Y\subset L$.

> [!success] Proof (extension to a maximal isotropic)
> Consider the set of isotropic subspaces containing $Y$, partially ordered by inclusion. Any chain has an upper bound given by the union, which is again isotropic. By Zorn's lemma there exists a maximal element $L$ in this set. Then $L$ is a maximal isotropic subspace of $V$, hence Lagrangian by Proposition 1.14. $\square$

> [!example] Example 1.16 (Standard Lagrangian subspaces in $\mathbb{R}^{2n}$)
> In $(\mathbb{R}^{2n},\omega_0)$ with coordinates $(x,y)$, define
> $$L_x := \{(x,y)\mid y=0\} \cong \mathbb{R}^n,\quad L_y := \{(x,y)\mid x=0\} \cong \mathbb{R}^n.$$
> Then $\omega_0$ vanishes on each of these subspaces, so they are isotropic. Since $\dim L_x = \dim L_y = n$, they are Lagrangian.  
> A direct computation shows
> $$L_x^{\omega} = L_x,\quad L_y^{\omega} = L_y.$$

> [!example] Example 1.17 (Graphs of linear maps)
> Consider the standard symplectic space $(\mathbb{R}^{2n},\omega_0)$. Identify $\mathbb{R}^{2n}$ with $\mathbb{R}^n_x \oplus \mathbb{R}^n_y$.  
> For a linear map $A:\mathbb{R}^n \to \mathbb{R}^n$, define its graph
> $$\Gamma_A := \{ (x,Ax) \mid x\in \mathbb{R}^n \} \subset \mathbb{R}^n_x \oplus \mathbb{R}^n_y.$$
> We claim that $\Gamma_A$ is Lagrangian if and only if $A$ is symmetric (with respect to the standard inner product).
> 
> Take two elements $(x,Ax),(x',Ax')\in \Gamma_A$. Then
> $$\omega_0\bigl((x,Ax),(x',Ax')\bigr) = x\cdot Ax' - (Ax)\cdot x' = x\cdot Ax' - x\cdot A^{\mathsf T}x' = x\cdot (A - A^{\mathsf T})x'.$$
> Thus $\omega_0$ vanishes on $\Gamma_A$ if and only if
> $$x\cdot (A - A^{\mathsf T})x' = 0 \quad \text{for all } x,x'\in \mathbb{R}^n,$$
> which is equivalent to $A-A^{\mathsf T}=0$, i.e. $A$ is symmetric.  
> Since $\Gamma_A$ has dimension $n$, it is then Lagrangian.

> [!example] Example 1.18 (The model $E\oplus E^*$)
> Let $E$ be a finite-dimensional real vector space and $E^*$ its dual. On $V := E\oplus E^*$ define
> $$\omega\bigl((v,\alpha),(w,\beta)\bigr) := \beta(v) - \alpha(w), \quad v,w\in E,\ \alpha,\beta\in E^*.$$
> Then $\omega$ is skew-symmetric and nondegenerate, so $(E\oplus E^*,\omega)$ is symplectic. One checks that
> $$E \cong E\oplus\{0\}, \quad E^*\cong \{0\}\oplus E^*$$
> are both Lagrangian:
> $$\omega\bigl((v,0),(w,0)\bigr) = 0,\quad \omega\bigl((0,\alpha),(0,\beta)\bigr) = 0,$$
> and each has dimension $\frac{1}{2}\dim(E\oplus E^*) = \dim E$.  
> This model will reappear later when discussing cotangent bundles.

---

## 1.5 The symplectic group $\mathrm{Sp}(2n,\mathbb{R})$

We now study the group of linear automorphisms that preserve the standard symplectic form on $\mathbb{R}^{2n}$.

> [!info] Definition (symplectic group)
> Let $(\mathbb{R}^{2n},\omega_0)$ be the standard symplectic vector space. The **symplectic group** is
> $$\mathrm{Sp}(2n,\mathbb{R}) := \{ A \in \mathrm{GL}(2n,\mathbb{R}) \mid \omega_0(Au,Av) = \omega_0(u,v) \ \text{for all } u,v\in\mathbb{R}^{2n} \}.$$

Recall that in the standard basis, the matrix of $\omega_0$ is
$$
  J_0 =
  \begin{pmatrix}
    0 & I_n \\
    -I_n & 0
  \end{pmatrix}.
$$

> [!abstract] Proposition 1.19 (Matrix characterisation)
> A matrix $A\in \mathrm{GL}(2n,\mathbb{R})$ lies in $\mathrm{Sp}(2n,\mathbb{R})$ if and only if
> $$A^{\mathsf T} J_0 A = J_0.$$

> [!success] Proof
> For $u,v\in\mathbb{R}^{2n}$, we can write
> $$\omega_0(u,v) = u^{\mathsf T} J_0 v.$$
> Then
> $$\omega_0(Au,Av) = (Au)^{\mathsf T} J_0 (Av) = u^{\mathsf T} A^{\mathsf T} J_0 A v.$$
> The condition $\omega_0(Au,Av) = \omega_0(u,v)$ for all $u,v$ is thus equivalent to
> $$u^{\mathsf T} A^{\mathsf T} J_0 A v = u^{\mathsf T} J_0 v \quad \text{for all } u,v,$$
> which holds if and only if $A^{\mathsf T}J_0 A = J_0$. $\square$

> [!abstract] Proposition 1.20 (Determinant)
> For every $A\in \mathrm{Sp}(2n,\mathbb{R})$ one has
> $$\det A = \pm 1.$$
> In fact, $\det A = 1$ for all $A\in \mathrm{Sp}(2n,\mathbb{R})$.

> [!success] Proof
> Taking determinants in the identity $A^{\mathsf T}J_0 A = J_0$ gives
> $$\det(A^{\mathsf T}) \det(J_0) \det(A) = \det(J_0).$$
> Since $\det(A^{\mathsf T}) = \det(A)$, we obtain
> $$(\det A)^2 \det(J_0) = \det(J_0).$$
> The matrix $J_0$ is invertible, so $\det(J_0)\neq 0$ and we deduce $(\det A)^2 = 1$, hence $\det A = \pm 1$.  
> One can further show (using topology) that $\mathrm{Sp}(2n,\mathbb{R})$ is connected, and since the identity matrix has determinant $1$, continuity forces $\det A = 1$ for all $A\in \mathrm{Sp}(2n,\mathbb{R})$. $\square$

> [!example] Example 1.21 ($n=1$: $\mathrm{Sp}(2,\mathbb{R}) = \mathrm{SL}(2,\mathbb{R})$)
> When $n=1$, we have
> $$J_0 = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}.$$
> Let
> $$A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}.$$
> The condition $A^{\mathsf T} J_0 A = J_0$ becomes a single scalar equation
> $$ad - bc = 1.$$
> Thus
> $$\mathrm{Sp}(2,\mathbb{R}) = \mathrm{SL}(2,\mathbb{R}).$$

> [!abstract] Proposition 1.22 (Block matrix conditions)
> Write a matrix $A\in\mathrm{GL}(2n,\mathbb{R})$ in block form
> $$A = \begin{pmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{pmatrix}, \quad A_{ij}\in M_n(\mathbb{R}).$$
> Then $A\in\mathrm{Sp}(2n,\mathbb{R})$ if and only if
> $$\begin{aligned} &A_{11}^{\mathsf T} A_{21} = A_{21}^{\mathsf T} A_{11}, \\ &A_{12}^{\mathsf T} A_{22} = A_{22}^{\mathsf T} A_{12}, \\ &A_{11}^{\mathsf T} A_{22} - A_{21}^{\mathsf T} A_{12} = I_n. \end{aligned}$$

> [!success] Proof
> Plug the block form of $A$ into the condition $A^{\mathsf T}J_0 A = J_0$, compute both sides in block form, and equate blocks. The computation is straightforward; the three displayed equations are exactly the resulting block conditions. $\square$

The symplectic group is a Lie group and has a well-understood Lie algebra.

> [!info] Definition (Lie algebra $\mathfrak{sp}(2n,\mathbb{R})$)
> The **Lie algebra** of $\mathrm{Sp}(2n,\mathbb{R})$, denoted $\mathfrak{sp}(2n,\mathbb{R})$, is the set of all matrices $X\in M_{2n}(\mathbb{R})$ of the form
> $$X = \left.\frac{\mathrm{d}}{\mathrm{d}t}\right|_{t=0} A(t)$$
> where $A(t)$ is a smooth path in $\mathrm{Sp}(2n,\mathbb{R})$ with $A(0)=I$.

> [!abstract] Proposition 1.23 (Lie algebra description)
> The Lie algebra $\mathfrak{sp}(2n,\mathbb{R})$ is given by
> $$\mathfrak{sp}(2n,\mathbb{R}) = \{ X \in M_{2n}(\mathbb{R}) \mid X^{\mathsf T} J_0 + J_0 X = 0 \},$$
> and has dimension
> $$\dim \mathfrak{sp}(2n,\mathbb{R}) = n(2n+1).$$

> [!success] Proof
> Let $A(t)\in\mathrm{Sp}(2n,\mathbb{R})$ with $A(0)=I$. Then
> $$A(t)^{\mathsf T} J_0 A(t) = J_0 \quad \text{for all } t.$$
> Differentiating at $t=0$ gives
> $$X^{\mathsf T} J_0 + J_0 X = 0,$$
> where $X = \dot{A}(0)$. Conversely, given any $X$ satisfying this equation, the path $A(t) = \exp(tX)$ lies in $\mathrm{Sp}(2n,\mathbb{R})$, so the set of such $X$ is precisely $\mathfrak{sp}(2n,\mathbb{R})$.
> 
> To compute the dimension, write
> $$X = \begin{pmatrix} A & B \\ C & D \end{pmatrix}, \quad A,B,C,D\in M_n(\mathbb{R}).$$
> The condition $X^{\mathsf T}J_0 + J_0 X = 0$ becomes
> $$\begin{pmatrix} A^{\mathsf T} & C^{\mathsf T} \\ B^{\mathsf T} & D^{\mathsf T} \end{pmatrix} \begin{pmatrix} 0 & I_n \\ -I_n & 0 \end{pmatrix} + \begin{pmatrix} 0 & I_n \\ -I_n & 0 \end{pmatrix} \begin{pmatrix} A & B \\ C & D \end{pmatrix} = 0.$$
> A short computation yields
> $$X^{\mathsf T}J_0 + J_0 X = \begin{pmatrix} -C^{\mathsf T} + C & A^{\mathsf T} + D \\ -D^{\mathsf T} - A & B^{\mathsf T} - B \end{pmatrix}.$$
> Thus the equations are
> $$C = C^{\mathsf T},\quad B = B^{\mathsf T},\quad D = -A^{\mathsf T}.$$
> So $A$ is arbitrary ($n^2$ free parameters), $B$ is symmetric ($\frac{n(n+1)}{2}$ parameters), and $C$ is symmetric ($\frac{n(n+1)}{2}$ parameters), while $D$ is determined by $A$. Hence
> $$\dim \mathfrak{sp}(2n,\mathbb{R}) = n^2 + \frac{n(n+1)}{2} + \frac{n(n+1)}{2} = n^2 + n(n+1) = n(2n+1).$$
> $\square$

> [!example] Example 1.24 (Some explicit symplectic matrices)
> 1. Let $B\in \mathrm{GL}(n,\mathbb{R})$. Then
>    $$A = \begin{pmatrix} B & 0 \\ 0 & (B^{-1})^{\mathsf T} \end{pmatrix}$$
>    lies in $\mathrm{Sp}(2n,\mathbb{R})$. This corresponds to changing the $x$-coordinates by $B$ and the dual $y$-coordinates by $(B^{-1})^{\mathsf T}$.
> 2. For any symmetric matrix $S\in M_n(\mathbb{R})$, the **shear**
>    $$A = \begin{pmatrix} I_n & 0 \\ S & I_n \end{pmatrix}$$
>    is symplectic. This is an example of a linear symplectomorphism generated by a quadratic Hamiltonian.

At this point we have a reasonably complete linear theory:

- the classification of skew-symmetric forms and symplectic vector spaces;
- the structure of symplectic complements and Lagrangian subspaces;
- the basic algebra of the symplectic group and its Lie algebra;
- and the existence of compatible almost complex structures and inner products.

In the next chapter we will pass from single vector spaces to **symplectic manifolds**, where a symplectic form is defined smoothly on each tangent space and varies smoothly from point to point.