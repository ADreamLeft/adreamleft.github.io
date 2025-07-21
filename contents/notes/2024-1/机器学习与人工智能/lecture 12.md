# NLP basics
## 1 Data processing
0. Data Acquisition
1. Tokenization
	1. Is the process of breaking up text document into individual words called tokens
2. Stop words removal
	1. Stop words are common words that do not contribute much of the information in a text document. E.g. 'the', 'is', 'a'.
3. Stemming and lemmatization
	1. Stemming: the process of reducing a word to its stem/root word.
	2. Lemmatization: converts a word to its root form and the root word belongs to a valid word in the language.
4. Cleaning
	1. Lowercasing
	2. Removing special characters
	3. Check spelling
## 2 Regular expressions??? 会考吗
## 3 Text representation
The process of converting text into numbers is called text data vectorization
### 3.1 One-hot encoding
It is a type of representation that assigns 0 to all elements in a vector except for One, which has a value of 1.
The length of an array of word depends on the vocabulary size
### 3.2 Bag of Words (BOW)
- puts words in a “bag” & computes frequency of occurrence of each word.
- It does not take into account the word order or lexical information for text representation
- It is useful to identify topic or sentiment
### 3.3 TF-IDF 
$TFIDF = TF (w, d) \times IDF (w)$
- TF (w, d): frequency of word $w$ in document $d$.
- IDF (w): inverse document frequency of word $w$.
$$
  \text{IDF}(w) = \log\left(\frac{N}{\text{df}(w)}\right)
$$

  Where:
  - $N$: total number of documents.
  - $\text{df}(w)$: frequency of documents containing the word $w$.
intuition:the weight assigned to each word not only depends on a word frequency, but also how frequent that particular word is in the entire corpus/corpora

### 3.4 word Embedding
- Word 2 Vec:  
	- Representation is created by training a classifier to predict whether a word is likely to appear nearby.
	- Continuous Bag of Words (CBOW) model:  
	  Predicts a target word based on its surrounding context words.
	- Skip-Gram model:  
	  Predicts surrounding context words given a target word.
### 3.5 N-gram
![[N-gram.png]]
