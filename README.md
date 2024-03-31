## EANResolver Official Documentation

### Functions

#### `checkEan(ean: string): boolean`

This function checks the validity of an EAN (European Article Number) and returns `true` if the EAN is valid, otherwise it returns `false`.

- `ean`: The EAN to be checked as a string.

**Example:**

```typescript
    import {checkEan} from "EANResolver";

    const isValidEan = checkEan('1234567890123'); // Example EAN
    console.log(isValidEan); // Output: true or false depending on the validity of the EAN
```



### `getProduct(ean: string): Promise<MinimalProduct>`

This function retrieves information about a product based on its EAN (European Article Number) and returns a Promise object containing a MinimalProduct instance.

- `ean`: The EAN to be checked as a string.

- Return Type: `Promise<MinimalProduct>`

**Example:**

```typescript
import { getProduct } from 'EANResolver';

getProduct('1234567890123')
  .then(product => {
    console.log(product);
  })
  .catch(error => {
    console.error(error);
  });

```

### Types

#### MinimalProduct

Returntype of the get product method. Represents an fetched produc,

- `error`: "Error code of the loading process (0 means all is ok)"
- `name` : "Name of the product as a string"
- `ean` : The ean of the product as string

**Example**

```typescript
import { MinimalProduct } from 'EANResolver';

const product: MinimalProduct = {
  error: 0,
  name: 'Example Product',
  ean: '1234567890123'
};

console.log(product);

```


### Enums

#### EanError

An enum defininng various types of EAN error codes (Used is the Error property of Minimalproduct)

- `OK`: No error
- `EAN_NOT_FOUND`: EAN not found
- `INVALID_CHECKSUM`: Invalid checksum
- `INVALID_EAN`: Invalid EAN
- `EAN_RESERVED`: EAN reserved
- `FETCHING_ERROR`: Fetching error


    


