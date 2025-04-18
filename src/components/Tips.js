import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TipsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 32px;
  margin-bottom: 24px;
  color: var(--dark);
  font-weight: 700;
  position: relative;
  padding-left: 15px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 32px;
    background: linear-gradient(to bottom, var(--primary), var(--primary-dark));
    border-radius: 4px;
  }
`;

const CategorySection = styled(motion.section)`
  margin-bottom: 50px;
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--dark);
  font-weight: 600;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TipCard = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }
`;

const TipHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;

const TipIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
`;

const TipTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: var(--dark);
  margin: 0;
`;

const TipBody = styled.div`
  flex-grow: 1;

  p {
    font-size: 15px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
  }

  code {
    background-color: #f0f0f0;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: var(--primary-dark);
  }
`;

const CodeBlock = styled.pre`
  background-color: #1e293b;
  color: #e0e0e0;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 15px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
`;

const TipFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border-top: 1px solid #f0f0f0;
  padding-top: 15px;
`;

const EfficiencyBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const EfficiencyTag = styled.span`
  background-color: var(--primary-light);
  color: var(--primary-dark);
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: 500;
`;

const LanguageTag = styled.span`
  background-color: rgba(52, 152, 219, 0.15);
  color: #3498db;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: 500;
`;

const Bold = styled.strong`
  font-weight: 600;
`;

const SearchBar = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  padding-left: 50px;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  font-size: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 2px 15px rgba(46, 204, 113, 0.15);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

const TipsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Data for the algorithm optimization tips
  const algorithmTips = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>,
      title: "List Comprehensions > Loops",
      body: "Python's list comprehensions are not only more readable but also up to 20% more energy-efficient than traditional for loops. They're optimized internally by the Python interpreter and often result in faster execution too.",
      code: `# Instead of this (less efficient):
result = []
for item in data:
    if item > 0:
        result.append(item * 2)

# Use this (more efficient):
result = [item * 2 for item in data if item > 0]`,
      efficiency: "+20%",
      languages: ["Python"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
      title: "Minimize I/O Operations",
      body: "Batch your I/O operations whenever possible. Reading and writing in larger chunks can reduce energy consumption by up to 30%. This applies to file operations, database queries, and network requests.",
      code: `# Instead of this (many small operations):
for id in customer_ids:
    customer = db.query(f"SELECT * FROM customers WHERE id = {id}")
    process_customer(customer)

# Use this (single batch operation):
customers = db.query(f"SELECT * FROM customers WHERE id IN ({','.join(customer_ids)})")
for customer in customers:
    process_customer(customer)`,
      efficiency: "+30%",
      languages: ["SQL", "Python", "General"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v8" /><path d="m4.93 10.93 1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" /><path d="m19.07 10.93-1.41 1.41" /><path d="M22 22H2" /><path d="m8 22 4-10 4 10" /></svg>,
      title: "Use Built-in Functions",
      body: "Optimized built-in functions like map(), filter(), reduce(), or sum() are more energy-efficient than custom implementations and make your code more maintainable. They're typically implemented in C and highly optimized.",
      code: `# Instead of this (manual implementation):
total = 0
for num in numbers:
    total += num

# Use this (built-in function):
total = sum(numbers)`,
      efficiency: "+15%",
      languages: ["Python", "JavaScript"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
      title: "Memoize Recursive Functions",
      body: "Recursive functions can cause exponential growth in computation for repeated subproblems. Use memoization (caching results) to avoid redundant calculations and reduce energy consumption.",
      code: `# Instead of this (inefficient recursion):
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Use this (memoized version):
memo = {}
def fibonacci(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n-1) + fibonacci(n-2)
    return memo[n]`,
      efficiency: "+90%",
      languages: ["Python", "JavaScript", "General"]
    }
  ];

  // Data for the memory optimization tips
  const memoryTips = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22V12c0-.5.5-1 1-1h14c.5 0 1 .5 1 1v10M4 12V8c0-.5.5-1 1-1h14c.5 0 1 .5 1 1v4M12 22v-6M8 8V6c0-.5.5-1 1-1h6c.5 0 1 .5 1 1v2"/></svg>,
      title: "Use Generators for Large Sequences",
      body: "Generators create items only when needed instead of storing the entire sequence in memory. They're perfect for processing large datasets without excessive memory usage.",
      code: `# Instead of this (memory-intensive):
def get_large_list(n):
    return [i * i for i in range(n)]

# Use this (memory-efficient):
def get_large_list(n):
    for i in range(n):
        yield i * i`,
      efficiency: "+40%",
      languages: ["Python"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 6h20M2 12h20M2 18h20"/></svg>,
      title: "Stream Large Files",
      body: "When processing large files, don't load the entire file into memory. Instead, stream the data and process it line by line or in reasonable chunks.",
      code: `# Instead of this (loads entire file):
with open('large_file.csv', 'r') as f:
    data = f.read()
    lines = data.split('\\n')
    for line in lines:
        process_line(line)

# Use this (streams line by line):
with open('large_file.csv', 'r') as f:
    for line in f:
        process_line(line)`,
      efficiency: "+60%",
      languages: ["Python", "Node.js"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>,
      title: "Use Weak References",
      body: "Weak references allow an object to be garbage collected if it's only referenced by weak references, which can prevent memory leaks in certain scenarios.",
      code: `// JavaScript example with WeakMap
// Instead of this (can cause memory leaks):
const cache = new Map();
function processElement(element) {
  if (!cache.has(element)) {
    cache.set(element, computeExpensiveResult(element));
  }
  return cache.get(element);
}

// Use this (allows garbage collection):
const cache = new WeakMap();
function processElement(element) {
  if (!cache.has(element)) {
    cache.set(element, computeExpensiveResult(element));
  }
  return cache.get(element);
}`,
      efficiency: "+25%",
      languages: ["JavaScript", "Python"]
    }
  ];

  // Data for the general efficiency tips
  const generalTips = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>,
      title: "Avoid Deep Framework Nesting",
      body: "Multiple layers of frameworks and libraries can add significant overhead. Keep your dependency stack lean, and consider if you actually need all those packages for your use case.",
      code: `# Example of unnecessary dependencies:
# package.json with nested dependencies
{
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "redux": "^4.1.0",
    "react-redux": "^7.2.4",
    "redux-thunk": "^2.3.0",
    "redux-saga": "^1.1.3", // Do you need both thunk and saga?
    "redux-logger": "^3.0.6", // Not needed in production
    "axios": "^0.21.1",
    "lodash": "^4.17.21" // Are you using enough of lodash to justify it?
  }
}`,
      efficiency: "+10-50%",
      languages: ["JavaScript", "General"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>,
      title: "Lazy Load Resources",
      body: "Load resources only when they're needed rather than upfront. This applies to images, modules, components, and data, reducing initial load energy and improving user experience.",
      code: `// JavaScript modern dynamic import
// Instead of this (loads everything upfront):
import HeavyComponent from './HeavyComponent';

// Use this (loads only when needed):
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {shouldShowComponent && <HeavyComponent />}
    </React.Suspense>
  );
}`,
      efficiency: "+35%",
      languages: ["JavaScript", "General"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>,
      title: "Choose Efficient Data Structures",
      body: "The right data structure can dramatically improve performance. Use maps/dictionaries for lookups, sets for membership tests, and appropriate collection types for your use case.",
      code: `# Instead of this (O(n) lookup):
items = [{"id": 1, "name": "A"}, {"id": 2, "name": "B"}, ...]
def find_item(item_id):
    for item in items:
        if item["id"] == item_id:
            return item
    return None

# Use this (O(1) lookup):
items_map = {item["id"]: item for item in items}
def find_item(item_id):
    return items_map.get(item_id)`,
      efficiency: "+70-90%",
      languages: ["Python", "JavaScript", "General"]
    }
  ];

  // Data for the language-specific tips
  const languageTips = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.498 22.59h5.504M13.2 8.4l1.8 1.8M4.8 4.8L3 3M20.4 3l-1.8 1.8M19.2 16.8l1.8 1.8M8.4 10.8l-1.8 1.8M3 13.2V7.8l4.8 4.8-4.8 4.8 2.4 2.4 4.8-4.8 4.8 4.8 2.4-2.4-4.8-4.8 4.8-4.8L15 5.4 10.2 10.2 5.4 5.4 3 7.8"/></svg>,
      title: "Python: Use NumPy for Numerical Operations",
      body: "NumPy operations are implemented in C and vectorized, making them much faster and more energy-efficient than equivalent Python loops for numerical tasks.",
      code: `# Instead of this (slow Python loops):
result = []
for i in range(len(data)):
    result.append(data[i] * 2 + 5)

# Use this (efficient NumPy operations):
import numpy as np
data_array = np.array(data)
result = data_array * 2 + 5`,
      efficiency: "+95%",
      languages: ["Python"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
      title: "JavaScript: Avoid DOM Reflows",
      body: "Minimize changes to the DOM, as each change can trigger costly reflows and repaints. Batch DOM updates and use document fragments when adding multiple elements.",
      code: `// Instead of this (causes many reflows):
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  container.appendChild(div);
}

// Use this (single reflow):
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  fragment.appendChild(div);
}
container.appendChild(fragment);`,
      efficiency: "+80%",
      languages: ["JavaScript"]
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
      title: "Java: Use StringBuilder for String Concatenation",
      body: "In Java, String objects are immutable, so each concatenation creates a new object. StringBuilder allows mutable string operations, greatly reducing memory usage and garbage collection.",
      code: `// Instead of this (creates many String objects):
String result = "";
for (int i = 0; i < 1000; i++) {
    result += "Item " + i;
}

// Use this (uses a single mutable buffer):
StringBuilder result = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    result.append("Item ").append(i);
}
String finalResult = result.toString();`,
      efficiency: "+85%",
      languages: ["Java"]
    }
  ];

  return (
    <TipsContainer>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: '42px',
          marginBottom: '40px',
          textAlign: 'center',
          color: 'var(--dark)',
          fontWeight: '800'
        }}
      >
        Sustainable Coding Tips
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{ textAlign: 'center', fontSize: '18px', maxWidth: '700px', margin: '0 auto 40px' }}
      >
        These energy-efficient coding patterns can significantly reduce your software's carbon footprint and improve performance. Small optimizations, when multiplied across millions of devices or billions of executions, translate to substantial energy savings.
      </motion.p>

      <SearchBar>
        <SearchIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </SearchIcon>
        <SearchInput type="text" placeholder="Search for tips by keyword, language, or pattern..." />
      </SearchBar>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <CategorySection variants={itemVariants}>
          <SectionTitle>Algorithm Optimization</SectionTitle>
          <TipsGrid>
            {algorithmTips.map((tip, index) => (
              <TipCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(46, 204, 113, 0.15)" }}
              >
                <TipHeader>
                  <TipIcon>{tip.icon}</TipIcon>
                  <TipTitle>{tip.title}</TipTitle>
                </TipHeader>
                <TipBody>
                  <p>{tip.body}</p>
                  <CodeBlock>{tip.code}</CodeBlock>
                </TipBody>
                <TipFooter>
                  <EfficiencyBadge>
                    <EfficiencyTag>Efficiency: {tip.efficiency}</EfficiencyTag>
                  </EfficiencyBadge>
                  <div>
                    {tip.languages.map((lang, i) => (
                      <LanguageTag key={i} style={{ marginLeft: i > 0 ? '5px' : '0' }}>{lang}</LanguageTag>
                    ))}
                  </div>
                </TipFooter>
              </TipCard>
            ))}
          </TipsGrid>
        </CategorySection>

        <CategorySection variants={itemVariants}>
          <SectionTitle>Memory Optimization</SectionTitle>
          <TipsGrid>
            {memoryTips.map((tip, index) => (
              <TipCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(46, 204, 113, 0.15)" }}
              >
                <TipHeader>
                  <TipIcon>{tip.icon}</TipIcon>
                  <TipTitle>{tip.title}</TipTitle>
                </TipHeader>
                <TipBody>
                  <p>{tip.body}</p>
                  <CodeBlock>{tip.code}</CodeBlock>
                </TipBody>
                <TipFooter>
                  <EfficiencyBadge>
                    <EfficiencyTag>Efficiency: {tip.efficiency}</EfficiencyTag>
                  </EfficiencyBadge>
                  <div>
                    {tip.languages.map((lang, i) => (
                      <LanguageTag key={i} style={{ marginLeft: i > 0 ? '5px' : '0' }}>{lang}</LanguageTag>
                    ))}
                  </div>
                </TipFooter>
              </TipCard>
            ))}
          </TipsGrid>
        </CategorySection>

        <CategorySection variants={itemVariants}>
          <SectionTitle>General Efficiency</SectionTitle>
          <TipsGrid>
            {generalTips.map((tip, index) => (
              <TipCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(46, 204, 113, 0.15)" }}
              >
                <TipHeader>
                  <TipIcon>{tip.icon}</TipIcon>
                  <TipTitle>{tip.title}</TipTitle>
                </TipHeader>
                <TipBody>
                  <p>{tip.body}</p>
                  <CodeBlock>{tip.code}</CodeBlock>
                </TipBody>
                <TipFooter>
                  <EfficiencyBadge>
                    <EfficiencyTag>Efficiency: {tip.efficiency}</EfficiencyTag>
                  </EfficiencyBadge>
                  <div>
                    {tip.languages.map((lang, i) => (
                      <LanguageTag key={i} style={{ marginLeft: i > 0 ? '5px' : '0' }}>{lang}</LanguageTag>
                    ))}
                  </div>
                </TipFooter>
              </TipCard>
            ))}
          </TipsGrid>
        </CategorySection>

        <CategorySection variants={itemVariants}>
          <SectionTitle>Language-Specific Tips</SectionTitle>
          <TipsGrid>
            {languageTips.map((tip, index) => (
              <TipCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(46, 204, 113, 0.15)" }}
              >
                <TipHeader>
                  <TipIcon>{tip.icon}</TipIcon>
                  <TipTitle>{tip.title}</TipTitle>
                </TipHeader>
                <TipBody>
                  <p>{tip.body}</p>
                  <CodeBlock>{tip.code}</CodeBlock>
                </TipBody>
                <TipFooter>
                  <EfficiencyBadge>
                    <EfficiencyTag>Efficiency: {tip.efficiency}</EfficiencyTag>
                  </EfficiencyBadge>
                  <div>
                    {tip.languages.map((lang, i) => (
                      <LanguageTag key={i} style={{ marginLeft: i > 0 ? '5px' : '0' }}>{lang}</LanguageTag>
                    ))}
                  </div>
                </TipFooter>
              </TipCard>
            ))}
          </TipsGrid>
        </CategorySection>
      </motion.div>
    </TipsContainer>
  );
};

export default TipsPage;