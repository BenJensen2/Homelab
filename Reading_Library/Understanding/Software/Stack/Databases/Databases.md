# Databases

## Design
- Relational vs Non-realational database
  - Relational
    - Stores data in tables with fixed columns & rows
    - Fixed predefined schema that everything must fit into
      - Lots of prep
      - Flexibility comprmised
    - Scales vertically: CPU, RAM, or SSD
      - Scaling out more difficult
    - Incredibly efficient Querying
    - ACID Model secures that a transaction is reliable & consistent
      - Atomic: All data necessarily validate
      - Consistent: Ensures processed transactions do not damage the database's structural integrity
      - Isolated: Each transaction is isolated from other data transactions
      - Durable: Data related to the processed transaction will not impact the manipulated data, even if a transaction fails.
  - Non-relational
    - Data can be stored in many ways (JSON, Wide-column, Key-value, Graph(Nodes & Edges))
    - Dynamic schema
      - Greater flexibilty
      - May compromise reliability
    - Easy Scaling: Scale out on commodity servers
      - Highly scalable
      - Fast to query
      - Compromises data integrity
      - Does not follow an ACID approach
    - Query efficiency depends on design
    - BASE model high availability, scalability and flexibility of data transactions
      - Basically Available: Ensure data availability by expanding & replicating data across the database cluster's nodes.
      - Soft state: Developers are responsible for ensuring database consistency
      - Eventually consistent: Consistency is not immediate, but it can be achieved and meanwhile, it is still possible to read the data.

  - Which to use?
    - Depends on type & amount of data as well as how it will be managed.
    - Relational
      - Integrity & Consistency (Poor scalability)
      - ACID compliant
      - Banking, Flight Tickets, Payroll
      - Easy to manage, can be learned by management & marketing
    - Non-Relational
      - Large sets of various types of data
      - Scalability & Availability
      - Social Networks, Real-time applications (Online gaming, instant messaging)
      - Require programming knowledge

#### References
- [SQL VS NOSQL: WHEN TO USE?](https://www.imaginarycloud.com/blog/sql-vs-nosql/)