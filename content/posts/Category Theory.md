+++
date = '2023-07-25T15:44:10-04:00'
draft = false
title = 'Category Theory: Basics'
categories = 'Math'
ShowToc = true
tags = [ "Category Theory" ]
+++

> [!info] Category
> A **category** $\mathcal{C}$ consists of the following data:
> - A collection $\text{Ob}(\mathcal{C})$, whose elements are called **objects** of $\mathcal{C}$.
> - For all $X,Y\in \text{Ob}(\mathcal{C})$, a set $\mathcal{C}(X,Y)$, whose elements are called **morphisms** from $X$ to $Y$.
> - For all $X,Y,Z\in \text{Ob}(\mathcal{C})$, a composition function $\mathcal{C}(Y,Z)\times \mathcal{C}(X,Y)\to \mathcal{C}(X,Z)$, defined by $(g,f)\mapsto g\circ f$.
> - For each $X\in \text{Ob}(\mathcal{C})$, an identity morphism $\text{id}_X\in \mathcal{C}(X,X)$.
> 
> They satisfy the following axioms:
> - Associativity: For all $f\in \mathcal{C}(X,Y)$, $g\in \mathcal{C}(Y,Z)$ and $h\in \mathcal{C}(Z,W)$, $(h\circ g)\circ f=h\circ (g\circ f)$. 
> - Identity Law: For each $f\in \mathcal{C}(X,Y)$, $f\circ \text{id}_X=f=\text{id}_Y\circ f$.
>> [!example] Examples
>> Just like groups, there are countless examples of categories, many of which are elegant and interesting. Below are some of the most common ones:
>> 1. The category of sets $\mathbf{Set}$, where objects are sets, morphisms are functions, and composition is function composition.
>> 2. The category of groups $\mathbf{Grp}$, where objects are groups, morphisms are group homomorphisms, and composition is homomorphism composition.
>> 3. The category of rings $\mathbf{Rng}$, where objects are rings, morphisms are ring homomorphisms, and composition is homomorphism composition.
>> 4. The category of topological spaces $\mathbf{Top}$, where objects are topological spaces, morphisms are continuous functions, and composition is function composition.

> [!danger] Remark
> - For convenience, when there is no ambiguity, we often write $f:X\to Y$ or $X\xrightarrow{f} Y$ to indicate that $f \in \mathcal{C}(X,Y)$. We also frequently omit the composition symbol $\circ$ in expressions like $g\circ f$.
> - Morphisms are sometimes denoted using different notations. The set $\mathcal{C}(X,Y)$ may also be written as $\text{Hom}_\mathcal{C}(X,Y)$, or further abbreviated as $\text{Hom}(X,Y)$. Some authors use $\text{Mor}(\mathcal{C})$ to denote the collection of all morphisms in $\mathcal{C}$.
> - **Commutative diagrams** are extremely useful and intuitive in category theory and other mathematical areas. For instance, the following diagram conveys the equation $yx=wz$: {{< figure align=center src="/images/Commutative_Diagram.svg" width="180" >}}
> Later, we will encounter many different commutative diagrams.

> [!info] Small category
> A **small category** is a category in which the collections of objects and morphisms form sets.

> [!info] Isomorphism in categories
> Given category $\mathcal{C}$ and objects $X,Y\in \text{Ob}(\mathcal{C})$, a morphism $f\in \mathcal{C}(X,Y)$ is called an isomorphism if there exists a morphism $g\in \mathcal{C}(Y,X)$ such that $g\circ f=\text{id}_X$ and $f\circ g=\text{id}_Y$.

> [!info] Groupoid
> A **groupoid** is a category in which every morphism is an isomorphism.

> [!info] Subcategory
> Given categories $\mathcal{C}$ and $\mathcal{C}'$, we say that $\mathcal{C}'$ is a **subcategory** of $\mathcal{C}$ if the following conditions hold:
> - $\text{Ob}(\mathcal{C}') \subset \text{Ob}(\mathcal{C})$.
> - For any $X, Y \in \text{Ob}(\mathcal{C}')$, $\mathcal{C}'(X,Y)\subseteq \mathcal{C}(X,Y)$.
> - Composition of morphisms in $\mathcal{C}'$ is restricted by $\mathcal{C}$.
> - Identity morphisms in $\mathcal{C}'$ are the same as those in $\mathcal{C}$.
> 
> In particular, if $\mathcal{C}'(X,Y)=\mathcal{C}(X,Y)$ for all $X,Y\in \text{Ob}(\mathcal{C}')$, then $\mathcal{C}'$ is called a **full subcategory** of $\mathcal{C}$.

> [!example] Common examples
> 1. The category of finite sets $\mathbf{FinSet}$ is a subcategory of $\mathbf{Set}$.
> 2. The category of abelian groups $\mathbf{Ab}$ is a subcategory of $\mathbf{Grp}$.
> 3. The category of commutative rings $\mathbf{CRng}$ is a subcategory of $\mathbf{Rng}$.
> 4. The category of Hausdorff spaces $\mathbf{Haus}$ is a subcategory of $\mathbf{Top}$.

> [!info] Opposite category
> Given a category $\mathcal{C}$, its **opposite/dual category** $\mathcal{C}^{\text{op}}$ is a category that satisfies the following properties:
> - $\text{Ob}(\mathcal{C}^{\text{op}})=\text{Ob}(\mathcal{C})$.
> - For any $X,Y\in \text{Ob}(\mathcal{C})$, $\mathcal{C}^{\text{op}}(X,Y)=\mathcal{C}(Y,X)$.
> - For any $f\in \mathcal{C}(X,Y)$ and $g\in \mathcal{C}(Y,Z)$, their images in $\mathcal{C}^{\text{op}}$ satisfy $g^{\text{op}}\circ f^{\text{op}}=(f\circ g)^{\text{op}}$.
> - Identity morphisms in $\mathcal{C}^{\text{op}}$ are the same as those in $\mathcal{C}$.

In simple terms, a functor is a map between categories.

> [!info] Functor
> A **functor** $F:\mathcal{C}\to \mathcal{D}$ between two categories consists of the following data:
> - For each object $X$ in $\mathcal{C}$, an object $F(X)$ in $\mathcal{D}$.
> - For each morphism $f:X\to Y$, a morphism $F(f):F(X)\to F(Y)$, where $X,Y\in \text{Ob}(\mathcal{C})$.
> 
> They satisfy the following axioms:
> - For each object $X$ in $\mathcal{C}$, $F(\operatorname{id}_X) =\operatorname{id}_{F(X)}$.
> - For all morphisms $f:X\to Y$ and $g:Y\to Z$ in $\mathcal{C}$,  $F(g\circ f)=F(g)\circ F(f)$.

> [!example] Example: Forgetful functor
> A **forgetful functor** is a functor that "forgets" some of the structure or properties of the objects or morphisms in a category. More precisely, a functor $F:\mathcal{C}\to \mathcal{D}$ is called a forgetful functor if:
> - $\mathcal{C}$ is a concrete category (such as $\mathbf{Grp}$ or $\mathbf{Top}$), and $\mathcal{D}$ is a simpler category, often $\mathbf{Set}$.
> - $F$ typically maps each object to its underlying set and each morphism to the corresponding function, thereby discarding additional structure or properties.

> [!info] Natural transformation
> Given categories $\mathcal{C}$ and $\mathcal{D}$, a **natural transformation** between two functors $F,G:\mathcal{C}\to \mathcal{D}$ is a collection of morphisms $\{\eta_X:F(X)\to G(X)\}_{X \in \operatorname{Ob}(\mathcal{C})}$ in $\mathcal{D}$ such that for every morphism $f:X\to Y$ in $\mathcal{C}$, the following diagram commutes: {{< figure align=center src="/images/Natural_Transformation.svg" width="240" >}}