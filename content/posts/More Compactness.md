+++
date = "2023-04-06T15:44:10-04:00"
draft = false
title = "More Compactness"
categories = "Math"
ShowToc = true
tags = [ "General Topology" ]
+++

We've already encountered compactness defined via open covers. In fact, compactness is not a single notion and there are several variations of it. Each serving different purposes and exhibiting interesting connections with one another.
## Other compactness and their relationship

> [!info] Sequential compactness  
> A topological space $X$ is called **sequentially compact** if every sequence in $X$ has a convergent subsequence whose limit is in $X$.

> [!info] Countable compactness
> A topological space $X$ is called **countably compact** if every countable open cover of $X$ has a finite subcover.

> [!info] Limit point compactness
> A topological space $X$ is called **limit point compact** if every infinite subset of $X$ has a limit point in $X$.

> [!abstract] Implications of compactness
> $(a)$ Every compact space is countably compact.
> 
> $(b)$ Every sequentially compact space is countably compact.
> 
> $(c)$ Every countably compact space is limit point compact.
> > [!success] Proof
> > $(a)$ Trivial. Compactness implies countable compactness by definition.
> > 
> > $(b)$ Suppose $X$ is sequentially compact. Assume, for contradiction, that there exists a countable open cover $\mathcal{U}=\{U_n\}_{n\in \mathbb{N}}$ of $X$ that admits no finite subcover. Then for each $n\in \mathbb{N}$, the finite union $U_1\cup U_2\cup \cdots\cup U_n$ is a proper subset of $X$. Thus, we can construct a sequence $\{x_n\}$ in $X$ by choosing points $x_n\in X\setminus (U_1\cup U_2\cup \cdots\cup U_n)$. Since $X$ is sequential compact, there exists a subsequence $\{x_{n_k}\}$ converging to some point $x\in X$.
> > 
> > $\mathcal{U}$ is an open cover of $X$, so there exists an index $m$ for which $x\in U_m$. Since $U_m$ is open and $x_{n_k}\to x$, there exists $K\in \mathbb{N}$ such that for all $k>K$, $x_{n_k}\in U_m$. However, by the construction of the sequence, if $n_k>m$, then $x_{n_k}\notin U_m$, which leads to a contradiction. Hence, the assumption is false, implying that $X$ should be countably compact.
> > 
> > $(c)$ Suppose $X$ is countably compact and let $A\subset X$ be an infinite set. Assume, for contradiction, that $A$ has no limit point in $X$. Then for each $a\in A$ there exists an open neighborhood $U_a$ of $a$ such that $U_a\cap A=\{a\}$. Since $A$ is infinite, we can extract a countably infinite subset $B\subset A$.
> > 
> > Consider the countable collection of sets $\mathcal{U}=\{U_b\}_{b\in B}\cup \{X \setminus B\}$. Note that $\mathcal{U}$ is the union of open sets and contains $X$, so it's an open cover of $X$. Since $X$ is countably compact, there exists a finite subcover of $\mathcal{U}$. However, a finite subcollection of $\{U_b\}_{b\in B}$ covers only finitely many points of $B$, and $X\setminus B$ covers no point of $B$. Thus, any finite subcover of $\mathcal{U}$ cannot cover $B\subset X$, which leads to a contradiction. Hence, the assumption is false, implying that $X$ should be limit point compact.
## Compactness in metric spaces

When the underlying space has certain properties, open cover compactness and sequential compactness become equivalent. This is the case, for example, in metric spaces, which are central to analysis.

> [!abstract] Equivalence of compactness in metric spaces
> For a metric space $(X,d)$, the following statements are equivalent:
> 
> $(a)$ $X$ is compact.
> 
> $(b)$ $X$ is sequentially compact.
> 
> $(c)$ $X$ is countably compact.
> 
> $(d)$ $X$ is limit point compact.
> 
> $(e)$ $X$ is complete and {{< tooltip "A subset $S$ of a metric space $(X,d)$ is totally bounded if for every $\varepsilon>0$, there exist finitely many points $x_1,\dots,x_n\in X$ such that $S\subseteq \bigcup_{i=1}^{n} B_{\varepsilon}(x_i)$." >}} totally bounded {{< /tooltip >}}.
> > [!success] Proof
> > We will prove the equivalence between statements $(a)$, $(b)$, and $(e)$, as is done in most textbooks. The rest part is left as exercises.
> > 
> > $(a)\implies (b)$ Suppose $X$ is compact. Let $\{x_n\}$ be a sequence in $X$. Assume, for contradiction, that no subsequence of $\{x_n\}$ converges. Then for each $x\in X$, there exists $\varepsilon_x>0$ such that the open ball $B(x,\varepsilon_x)$ contains only finitely many terms of the sequence. The collection $\{B(x,\varepsilon_x)\mid x\in X\}$ is an open cover of $X$, so by compactness, there exists a finite subcover $\{B(x_1,\varepsilon_1),\dots,B(x_k,\varepsilon_k)\}$. Since each ball in this subcover contains only finitely many terms, their union also contains only finitely many terms, contradicting the assumption that no subsequence of $\{x_n\}$ converges. Hence, $\{x_n\}$ has a convergent subsequence, and we conclude that $X$ is sequentially compact.
> > 
> > $(b)\implies (e)$ Suppose $X$ is sequentially compact. As completeness is trivial in this case, we only need to check total boundedness.
> > 
> > Assume, for contradiction, that $X$ is not totally bounded. Then there exists $\varepsilon>0$ such that no finite cover of $X$ by open balls of radius $\varepsilon$ exists.  Construct a sequence $\{x_n\}$ as follows: choose $x_1\in X$, and then for each $n\geq 2$, choose $x_{n+1}\notin \bigcup_{i=1}^n B(x_i,\varepsilon)$. This makes $d(x_i,x_j)\geq \varepsilon$ for all $i\neq j$. Therefore, $\{x_n\}$ has no convergent subsequence, contradicting sequential compactness. Hence, $X$ is totally bounded.
> > 
> > $(e)\implies (a)$

$\mathbb{R}^n$ is a special case of metric spaces, so the proposition above naturally works on it. You may remember these important theorems in basic analysis.

> [!note] Bolzano-Weierstrass theorem, weaker version of $(b)\implies (a)$
> Every bounded sequence in $\mathbb{R}^n$ has a convergent subsequence.

> [!note] Heine-Borel theorem, weaker version of $(a)\iff (e)$
> A subset of $\mathbb{R}^n$ is compact if and only if it is closed and bounded.
## Exercises

> [!question] Problem 1
> Show that for a $T_1$ space, countable compactness is equivalent to limit point compactness. Then give an example of a space that is limit point compact but not countably compact.

> [!question] Problem 2
> Show that:
> 1. A closed subspace of a countably compact space is countably compact.
> 2. The continuous image of a countably compact space is countably compact.
> 3. A topological space is countably compact if and only if the intersection of any nested sequence of non-empty closed sets in it is nonempty:
>    $$F_1\supset F_2\supset \cdots \text{ (all closed, each }F_n\neq \emptyset)\implies \bigcap_{n=1}^\infty F_n\neq \emptyset.$$

> [!question] Problem 3
> Complete the proof of the proposition of the equivalence of compactness in metric spaces.

