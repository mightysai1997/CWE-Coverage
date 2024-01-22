def cryptography_noncompliant():
    from cryptography.hazmat.primitives import hashes, hmac
    import secrets
    # Noncompliant: keysize too small for this algorithm.
    key = secrets.token_bytes(12)
    hash_key = hmac.HMAC(key, algorithm=hashes.SHA512_224())
